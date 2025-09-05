import dbConnect from "@/lib/mongodb";
import Application from "@/models/application";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await dbConnect();

    // Get application by ID if provided
    if (req.query.id) {
      const application = await Application.findById(req.query.id);

      if (!application) {
        return res.status(404).json({ error: "Application not found" });
      }

      return res.status(200).json({ application });
    }

    // Otherwise, return a count of applications
    const totalCount = await Application.countDocuments();
    const pendingCount = await Application.countDocuments({
      status: "pending"
    });
    const approvedCount = await Application.countDocuments({
      status: "approved"
    });
    const rejectedCount = await Application.countDocuments({
      status: "rejected"
    });

    return res.status(200).json({
      counts: {
        total: totalCount,
        pending: pendingCount,
        approved: approvedCount,
        rejected: rejectedCount
      }
    });
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
