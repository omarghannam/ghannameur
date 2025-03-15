vercel deploy --prod \
  -e DATABASE_URL="postgresql://postgres.udejujjbimjhmtzqptmi:Poiuytreza3!@aws-0-eu-west-3.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1&pool_timeout=0" \
  -e DIRECT_URL="postgresql://postgres.udejujjbimjhmtzqptmi:Poiuytreza3!@aws-0-eu-west-3.pooler.supabase.com:6543/postgres?sslmode=require" \
  -e NEXTAUTH_URL="https://kifkif.life" \
  -e NEXTAUTH_SECRET="necObYWIJnM2EGX4dGFMwITvmj86Uo8BXbp/camtunw=" \
  -e NODE_ENV="production" 