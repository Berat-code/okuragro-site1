declare namespace Cloudflare {
  interface Env {
    DB: D1Database;
    ADMIN_EMAIL: string;
    FILES: R2Bucket;
  }
}
