import 'next-auth';
import { UserRole } from '@prisma/client';

declare module 'next-auth' {
  interface User {
    role: UserRole;
    businessId?: string;
  }

  interface Session {
    user: User & {
      role: UserRole;
      businessId?: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: UserRole;
    businessId?: string;
  }
} 