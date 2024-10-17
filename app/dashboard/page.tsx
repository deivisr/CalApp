import { requireAuth } from "../lib/hooks";

export default async function DashboardPage() {
  const session = await requireAuth();

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
