import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    // Try to create a test user
    const testUser = await prisma.user.create({
      data: {
        email: 'test@example.com',
        password: 'test123',
        firstName: 'Test',
        lastName: 'User',
      },
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Database connection successful',
      user: testUser 
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ 
      success: false,
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
} 