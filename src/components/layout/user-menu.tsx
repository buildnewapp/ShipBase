"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Crown, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { HeaderDictionary, Locale } from "@/i18n/types";

interface UserMenuProps {
  dictionary: HeaderDictionary;
  locale: Locale;
}

export function UserMenu({ dictionary, locale }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const session = authClient.useSession();
  
  const user = session.data?.user;
  const isAuthenticated = Boolean(user);

  if (!isAuthenticated) {
    return null;
  }

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      router.push("/");
    } catch (error) {
      console.error("[Better Auth] Sign out failed", error);
    }
  };

  // 获取用户头像或生成默认头像
  const getUserAvatar = () => {
    if (user?.image) {
      return (
        <img
          src={user.image}
          alt={user.name || user.email || "User"}
          className="h-8 w-8 rounded-full object-cover"
        />
      );
    }
    
    // 生成基于用户名的默认头像
    const initials = (user?.name || user?.email || "U")
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
    
    return (
      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
        <span className="text-white font-semibold text-sm">{initials}</span>
      </div>
    );
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 rounded-full p-0 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          aria-label="用户菜单"
        >
          {getUserAvatar()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user?.name || "用户"}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={locale === 'en' ? '/profile' : `/${locale}/profile`} className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>{dictionary.userMenu.profile}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={locale === 'en' ? '/membership' : `/${locale}/membership`} className="cursor-pointer">
            <Crown className="mr-2 h-4 w-4" />
            <span>{dictionary.userMenu.membership}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="cursor-pointer text-red-600 focus:text-red-600 dark:text-red-400 dark:focus:text-red-400"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>{dictionary.userMenu.signOut}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
