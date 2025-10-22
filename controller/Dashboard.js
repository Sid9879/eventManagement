const Enquiry = require('../models/Enquiry');
const User = require('../models/User');
const Notification = require('../models/Notification');
const Library = require('../models/Library');

async function getCounts(req, res) {
  try {
    const pendingEnquiryCount = await Enquiry.countDocuments({ status: 'Pending' });

    const userCount = await User.countDocuments();

    const notificationCount = await Notification.countDocuments();

    return res.status(200).json({
      message: 'Counts fetched successfully',
      data: {
        pendingEnquiryCount,
        userCount,
        notificationCount
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
}

// async function getDailyActivitySummary(req, res) {
//   try {
//     const now = new Date();
//     const yesterday = new Date();
//     yesterday.setDate(now.getDate() - 1);

//     // Fetch recent enquiries
//     const enquiries = await Enquiry.find({
//       createdAt: { $gte: yesterday, $lte: now }
//     })
//       .select('name message createdAt')
//       .sort({ createdAt: -1 })
//       .lean();

//     // Fetch recent library items
//     const libraries = await Library.find({
//       createdAt: { $gte: yesterday, $lte: now }
//     })
//       .select('name type createdAt')
//       .sort({ createdAt: -1 })
//       .lean();

//     // Merge all with source label
//     const merged = [
//       ...enquiries.map(e => ({
//         date: e.createdAt.toISOString().split('T')[0],
//         summary: `Enquiry - ${e.message}`
//       })),
//       ...libraries.map(l => ({
//         date: l.createdAt.toISOString().split('T')[0],
//         summary: `Library - ${l.name}`
//       }))
//     ];

//     // Group by date
//     const grouped = {};
//     merged.forEach(item => {
//       if (!grouped[item.date]) grouped[item.date] = [];
//       grouped[item.date].push(item.summary);
//     });

//     return res.status(200).json({
//       message: 'Daily activity summary fetched successfully',
//       data: grouped
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Server error', error: error.message });
//   }
// }

async function getDailyActivitySummary(req, res) {
  try {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.getMonth();
    const dd = today.getDate();

    // Fetch Enquiries created today
    const enquiries = await Enquiry.find().lean();
    const todaysEnquiries = enquiries.filter(e => {
      const d = new Date(e.createdAt);
      return d.getFullYear() === yyyy && d.getMonth() === mm && d.getDate() === dd;
    });

    // Fetch Library items created today
    const libraries = await Library.find().lean();
    const todaysLibraries = libraries.filter(l => {
      const d = new Date(l.createdAt);
      return d.getFullYear() === yyyy && d.getMonth() === mm && d.getDate() === dd;
    });

    // Format activities
    const activities = [];

    todaysEnquiries.forEach(enq => {
      activities.push(`Enquiry - ${enq.message}`);
    });

    todaysLibraries.forEach(lib => {
      activities.push(`Library - ${lib.name}`);
    });

    return res.status(200).json({
      message: 'Today recent activity fetched successfully',
       data: {
        "Today": activities
      }
    });
    
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
}


module.exports = {getCounts,getDailyActivitySummary}
