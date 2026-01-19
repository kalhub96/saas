import { createSupabassServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // 1. Initialize the client 
  const supabase = await createSupabassServer();

  // 2. Get the current user session
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  // 3. Protection: If no user, send them to login
  if (authError || !user) {
    redirect("/login");
  }

// 4. Fetch dashboard data
const { data: profile } = await supabase
  .from("profiles")
  .select("*")        // It's good practice to specify columns, or use '*' for all
  .eq("id", user.id)  // <--- This is the correct way to filter by ID
  .single();


  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome, {profile?.username || user.email}</h1>
      <p className="text-gray-600">This is your private dashboard.</p>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold">User ID</h3>
          <p className="text-sm font-mono">{user.id}</p>
        </div>
        {/* Add more dashboard cards here */}
      </div>
    </div>
  );
}
