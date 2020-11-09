import { useState, useEffect } from 'react';
import loader from '@ibsheet/loader';

import { IBSheetLoaderStatic } from '@ibsheet/loader/dist/esm/lib/main';

// TODO: Fix this cheating
declare global {
    interface Window {
        IBSheet: IBSheetLoaderStatic;
    }
}

interface SheetEvent {
  type: string,
  target: any,
  data: {
    data: any[],
    el: string,
    id: string
  }
}

export const useIbsheet = (id: string) => {
  const [ibsheet, setIbsheet] = useState<any>();
 
  useEffect(() => {
    loader.once('create-sheet', (event: SheetEvent) => {
      const { data } = event
      console.log('[START CREATING SHEET]', data)
    })
  })

  // SUCEEDED
  useEffect(() => {
    loader.on('created-sheet', (event: any) => {
      // const sheet = event.target
      const sheet = window.IBSheet;
      const sheetById = (sheet as any).find(
        (item: any) => item != null && String(item.id) === String(id),
      );
      console.log('[CREATED SHEET SUCCESSFULLY] event sheetId:', id)
      setIbsheet(sheetById);
    });
  }, [id]);

  // FAILED
  useEffect(() => {
    loader.once('create-sheet-failed', (event: any) => {
      const { data, error } = event
      console.error('[CREATED SHEET FAILED]:', data.id, error)
    })
  })

  useEffect(() => {
    if (ibsheet) {
      // Sheet keydown event
      // TODO: type
      ibsheet.bind('onKeyDown', ({ sheet, key, prefix }: any) => {
        // Enter key is pressed
        if (prefix === '' && Number(key) === 13) {
          if (Number(sheet.options.Cfg.EnterMode) === 5) {
            const curRow = sheet.getFocusedRow();
            const curCol = sheet.getFocusedCol();
            const nextRow = sheet.getNextRow(curRow);
            if (curRow) {
              sheet.focus(nextRow, curCol);
            }
            return true;
          }
        }

        return false;
      });
    }
  }, [ibsheet]);

  return { ibsheet };
};
