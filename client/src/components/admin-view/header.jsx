import React from 'react'
import { useDispatch } from 'react-redux';
import { Button } from '../ui/button';
import { AlignJustify, LogOut } from 'lucide-react';
import { logoutUser } from '@/store/auth-slice';

export function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();

  function handleLogout() {
    const check=confirm("Do you want to lgout?");
    if(check==false) return;
    dispatch(logoutUser());
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button
          onClick={handleLogout}
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow cursor-pointer"
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
}

