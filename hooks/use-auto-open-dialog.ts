'use client';

import { useCallback, useEffect, useState } from 'react';

interface UseAutoOpenDialogReturn {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

/**
 * Custom hook for managing auto-opening dialogs with local storage persistence.
 * Initially opens the dialog, then re-opens it automatically after specified interval if closed.
 *
 * @param dialogId - Unique identifier for the dialog (used as localStorage key)
 * @param intervalMinutes - Number of minutes before auto-opening closed dialog (default: 15)
 * @returns Object containing isOpen state and openDialog/closeDialog functions
 *
 * @example
 * const { isOpen, openDialog } = useAutoOpenDialog('location-dialog', 15);
 *
 * // In JSX:
 * <Dialog open={isOpen} onOpenChange={(open) => !open ? null : openDialog()}>
 */
export function useAutoOpenDialog(
  dialogId: string,
  intervalMinutes: number = 15,
): UseAutoOpenDialogReturn {
  const [isOpen, setIsOpen] = useState(false);
  // const [isMounted, setIsMounted] = useState(false);

  const storageKey = `dialog_${dialogId}`;
  const timestampKey = `${storageKey}_timestamp`;

  const openDialog = useCallback(() => {
    setIsOpen(true);
    // Update timestamp when dialog is opened
    if (typeof window !== 'undefined') {
      localStorage.setItem(timestampKey, Date.now().toString());
    }
  }, [timestampKey]);

  const closeDialog = () => {
    setIsOpen(false);
  };

  const shouldAutoOpen = useCallback(() => {
    if (typeof window === 'undefined') return false;

    const lastOpenedTimestamp = localStorage.getItem(timestampKey);

    // If no timestamp exists, this is first visit - open the dialog
    if (!lastOpenedTimestamp) {
      return true;
    }

    const now = Date.now();
    const lastOpened = parseInt(lastOpenedTimestamp, 10);
    const intervalMs = intervalMinutes * 60 * 1000;
    const timeSinceLastOpen = now - lastOpened;

    // Auto-open if interval has passed
    return timeSinceLastOpen >= intervalMs;
  }, [intervalMinutes, timestampKey]);

  // Initial mount and setup
  useEffect(() => {
    // setIsMounted(true);

    // Check if dialog should be auto-opened on mount
    // if (shouldAutoOpen()) {
    //   openDialog();
    // }

    // Set up interval to check every minute if dialog should auto-open
    const intervalId = setInterval(() => {
      if (shouldAutoOpen() && !isOpen) {
        openDialog();
      }
    }, 60 * 1000); // Check every minute

    return () => {
      clearInterval(intervalId);
    };
  }, [isOpen, intervalMinutes, openDialog, shouldAutoOpen]);

  if (shouldAutoOpen()) {
    openDialog();
  }

  return {
    isOpen,
    openDialog,
    closeDialog,
  };
}
