import {
  ActivityIcon,
  BoxesIcon,
  BriefcaseIcon,
  CircleCheckIcon,
  ClipboardListIcon,
  CoinsIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  PackageIcon,
  ReceiptIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  TruckIcon,
  UserCogIcon,
  UsersIcon,
  WalletIcon,
  KeyRoundIcon,
  MapIcon,
  BanknoteIcon
} from
  "lucide-react";
import type { Feature, InventoryCategory, PhoneScreenData, Role } from "../types/landing";

export const navLinks = [
  { label: "Platform", href: "#ecosystem" },
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Roles", href: "#roles" },
  { label: "Logistics", href: "#logistics" },
  { label: "Finance", href: "#finance" }
];

export const heroFloatingCards = [
  {
    id: "transit",
    icon: TruckIcon,
    title: "Shipment in transit",
    meta: "SHP-20418 · Tray T-112 · ETA 2:40 PM",
    status: "In transit",
    tone: "brand" as const,
    position: "-left-16 top-28",
    delay: 0
  },
  {
    id: "inventory",
    icon: BoxesIcon,
    title: "Inventory status",
    meta: "Bone Allograft 10cc · 6 units left",
    status: "Low stock",
    tone: "warning" as const,
    position: "-right-14 top-12",
    delay: 1.2
  },
  {
    id: "sale",
    icon: TrendingUpIcon,
    title: "Sales completed",
    meta: "SL-10482 · Dr. A. Patel · $12,400",
    status: "Approved",
    tone: "success" as const,
    position: "-left-10 bottom-16",
    delay: 2.1
  },
  {
    id: "delivery",
    icon: CircleCheckIcon,
    title: "Delivery completed",
    meta: "St. Mary's Hospital · OR 4 · 11:05 AM",
    status: "Delivered",
    tone: "success" as const,
    position: "-right-16 bottom-36",
    delay: 0.6
  }
];



export const modules = [
  { label: "Sales", note: "Reps & approvals", icon: TrendingUpIcon },
  { label: "Inventory", note: "Implants, trays, bio", icon: BoxesIcon },
  { label: "Logistics", note: "Pickup to drop-off", icon: TruckIcon },
  { label: "Purchase Orders", note: "Standard & bulk bio", icon: ClipboardListIcon },
  { label: "Finance", note: "Payments & commission", icon: WalletIcon },
  { label: "Administration", note: "Users, roles, control", icon: ShieldCheckIcon }];


export const fragmentedNodes = [
  { label: "Sales", icon: TrendingUpIcon, x: 14, y: 16 },
  { label: "Inventory", icon: BoxesIcon, x: 68, y: 12 },
  { label: "Orders", icon: ClipboardListIcon, x: 40, y: 34 },
  { label: "Shipments", icon: PackageIcon, x: 84, y: 42 },
  { label: "Drivers", icon: TruckIcon, x: 17, y: 58 },
  { label: "Finance", icon: WalletIcon, x: 58, y: 66 },
  { label: "Commissions", icon: CoinsIcon, x: 26, y: 86 },
  { label: "Administration", icon: ShieldCheckIcon, x: 78, y: 86 }];


export const painPoints = [
  { title: "Sales live in spreadsheets", text: "Reps log surgeries by text and email. Managers approve without context." },
  { title: "Inventory is a guess", text: "Nobody knows where a tray is until the morning of surgery." },
  { title: "Commissions are reconciled by hand", text: "Finance chases paperwork across sales, POs and vendor invoices." },
  { title: "Loaner sets are tracked manually", text: "Loaner sets are tracked manually, making case coverage hard to confirm." }];


export const roleChain = [
  { label: "Sales Rep", detail: "Creates the sale, order or shipment", icon: BriefcaseIcon },
  { label: "Manager", detail: "Reviews and approves", icon: UserCogIcon },
  { label: "Driver / Logistics", detail: "Picks up and delivers", icon: TruckIcon },
  { label: "Finance", detail: "Settles payments and commission", icon: WalletIcon },
  { label: "Admin", detail: "Oversees the whole operation", icon: ShieldCheckIcon }];


export const ecosystemModules = [
  { label: "Sales", icon: TrendingUpIcon },
  { label: "Inventory", icon: BoxesIcon },
  { label: "Purchase Orders", icon: ClipboardListIcon },
  { label: "Shipments", icon: PackageIcon },
  { label: "Commission", icon: CoinsIcon },
  { label: "Vendor Payments", icon: BanknoteIcon },
  { label: "Reports", icon: FileTextIcon }];


export const workflowSteps = [
  { title: "Create", role: "Sales Rep", status: "Draft", description: "The sales representative creates a sale, order, or shipment from the field." },
  { title: "Review", role: "Manager", status: "Approved", description: "A manager reviews the details and approves the operation." },
  { title: "Assign", role: "Manager", status: "Driver assigned", description: "The shipment or delivery is assigned to the right driver." },
  { title: "Track", role: "Driver", status: "In transit", description: "The shipment moves through each step of its logistics workflow." },
  { title: "Complete", role: "Driver", status: "Delivered", description: "Delivery is confirmed and operational status updates everywhere." },
  { title: "Manage", role: "Finance & Admin", status: "Commission scheduled", description: "Finance and Admin handle commissions, payments, inventory and reports." }];


export const features: Feature[] = [
  {
    id: "sales",
    label: "Sales",
    icon: TrendingUpIcon,
    headline: "Every sale, from creation to commission.",
    description: "Reps log surgeries and sales in the field. Managers approve with full context, and commission follows automatically.",
    bullets: ["Sales creation with physician and facility", "Manager approval workflow", "Territory and representative tracking", "Open and closed bills", "Commission status on every sale"],
    table: {
      title: "Sales · Southeast territory",
      columns: ["Sale", "Physician / Facility", "Rep", "Amount"],
      rows: [
        { cells: ["SL-10482", "Dr. A. Patel · St. Mary's", "J. Rivera", "$12,400"], status: { label: "Approved", tone: "success" } },
        { cells: ["SL-10481", "Dr. K. Moore · Baptist Health", "L. Chen", "$8,920"], status: { label: "Pending review", tone: "warning" } },
        { cells: ["SL-10479", "Dr. R. Singh · Mercy General", "J. Rivera", "$15,300"], status: { label: "Bill open", tone: "brand" } },
        { cells: ["SL-10476", "Dr. M. Ortiz · Northside", "D. Brooks", "$6,750"], status: { label: "Bill closed", tone: "neutral" } },
        { cells: ["SL-10473", "Dr. S. Nguyen · Memorial", "L. Chen", "$21,080"], status: { label: "Commission paid", tone: "success" } }]

    }
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: BoxesIcon,
    headline: "Know what you have, and where it is.",
    description: "Implants, trays and bio products tracked by serial and lot, from warehouse shelf to operating room.",
    bullets: ["Implants, trays and bio products", "Stock movement between locations", "Serial and lot tracking", "Assigned vs. available visibility"],
    table: {
      title: "Inventory · All locations",
      columns: ["Item", "Category", "Serial / Lot", "Location"],
      rows: [
        { cells: ["Pedicle Screw 6.5×45", "Implant", "SN-PS-88213", "Main warehouse"], status: { label: "Available", tone: "success" } },
        { cells: ["Spinal Fusion Tray", "Tray", "T-112", "J. Rivera"], status: { label: "Assigned", tone: "brand" } },
        { cells: ["Bone Allograft 10cc", "Bio", "LOT-BG-2291", "Cold storage"], status: { label: "Low stock", tone: "warning" } },
        { cells: ["Cervical Plate 4-level", "Implant", "SN-CP-40517", "Route SHP-20418"], status: { label: "In movement", tone: "brand" } },
        { cells: ["Hip Revision Tray", "Tray", "T-087", "Sterile processing"], status: { label: "Processing", tone: "neutral" } }]

    }
  },
  {
    id: "logistics",
    label: "Shipment & Logistics",
    icon: TruckIcon,
    headline: "Pickup to drop-off, coordinated.",
    description: "Managers assign drivers, drivers update each step, and everyone sees the same shipment status.",
    bullets: ["Pickup and drop-off scheduling", "Driver assignment", "Shipment tracking by status", "Delivery confirmation", "End-to-end logistics workflow"],
    table: {
      title: "Shipments · Today",
      columns: ["Shipment", "Route", "Driver", "ETA"],
      rows: [
        { cells: ["SHP-20418", "Warehouse → St. Mary's", "M. Lewis", "2:40 PM"], status: { label: "In transit", tone: "brand" } },
        { cells: ["SHP-20417", "Baptist Health → Warehouse", "T. Park", "3:15 PM"], status: { label: "Pickup scheduled", tone: "neutral" } },
        { cells: ["SHP-20415", "Warehouse → Mercy General", "A. Diaz", "4:00 PM"], status: { label: "Driver assigned", tone: "warning" } },
        { cells: ["SHP-20412", "Northside → Memorial", "M. Lewis", "11:05 AM"], status: { label: "Delivered", tone: "success" } }]

    }
  },
  {
    id: "po",
    label: "Purchase Orders",
    icon: ClipboardListIcon,
    headline: "Replenish before anything runs out.",
    description: "Standard and bulk bio orders move through approval and land straight back in inventory.",
    bullets: ["Standard purchase orders", "Bulk bio product orders", "Inventory replenishment", "Vendor-linked approvals"],
    table: {
      title: "Purchase orders · September",
      columns: ["PO", "Vendor", "Type", "Total"],
      rows: [
        { cells: ["PO-3391", "Medline Surgical", "Standard", "$18,420"], status: { label: "Approved", tone: "success" } },
        { cells: ["PO-3390", "BioGraft Labs", "Bulk bio", "$42,900"], status: { label: "Pending approval", tone: "warning" } },
        { cells: ["PO-3388", "Orthix Implants", "Replenishment", "$9,860"], status: { label: "Ordered", tone: "brand" } },
        { cells: ["PO-3385", "BioGraft Labs", "Bulk bio", "$31,200"], status: { label: "Received", tone: "success" } }]

    }
  },
  {
    id: "finance",
    label: "Finance",
    icon: WalletIcon,
    headline: "Money movement, reconciled.",
    description: "Vendor payments, expenses, commissions and shipping costs, each linked back to the sale, PO or shipment behind it.",
    bullets: ["Vendor payments", "Expenses", "Commissions", "Shipping costs", "Financial reports"],
    table: {
      title: "Ledger · This week",
      columns: ["Entry", "Type", "Linked to", "Amount"],
      rows: [
        { cells: ["VP-771", "Vendor payment", "PO-3385", "$31,200"], status: { label: "Paid", tone: "success" } },
        { cells: ["CM-2204", "Commission", "SL-10473", "$2,108"], status: { label: "Scheduled", tone: "brand" } },
        { cells: ["EX-918", "Expense", "Territory SE", "$640"], status: { label: "Pending", tone: "warning" } },
        { cells: ["SH-5520", "Shipping cost", "SHP-20412", "$86"], status: { label: "Recorded", tone: "neutral" } }]

    }
  },
  {
    id: "admin",
    label: "Administration",
    icon: ShieldCheckIcon,
    headline: "Control every user, role and territory.",
    description: "Admins set who sees what, manage territories and keep an eye on the whole operation.",
    bullets: ["Users and roles", "Territories", "Inventory and shipment oversight", "Reports", "System control and permissions"],
    table: {
      title: "Users · 248 active",
      columns: ["User", "Role", "Territory", "Last active"],
      rows: [
        { cells: ["Jordan Rivera", "Sales Rep", "Southeast", "2 min ago"], status: { label: "Active", tone: "success" } },
        { cells: ["Dana Whitfield", "Manager", "Southeast", "14 min ago"], status: { label: "Active", tone: "success" } },
        { cells: ["Marcus Lewis", "Driver", "Metro Atlanta", "Now"], status: { label: "On route", tone: "brand" } },
        { cells: ["Priya Shah", "Finance", "All territories", "1 hr ago"], status: { label: "Active", tone: "success" } },
        { cells: ["alex@northside.org", "Sales Rep", "Northeast", "—"], status: { label: "Invited", tone: "warning" } }]

    }
  }];


export const roles: Role[] = [
  {
    id: "inventory",
    label: "Inventory Specialist",
    icon: BoxesIcon,
    description: "Manage sterile trays, track lot expiration, audit implants, and stage kits for dispatch.",
    screen: {
      greeting: "Good morning, Elena",
      title: "Warehouse & Trays",
      stats: [{ label: "Sterile trays", value: "38" }, { label: "Low stock bio", value: "3" }],
      items: [
        { title: "Spinal Fusion Tray · T-112", meta: "Sterilized · Staged for OR 4", status: "Ready", tone: "success" },
        { title: "LOT-BG-2291 · Bone Allograft", meta: "Cold storage · Bin B", status: "Restock", tone: "warning" },
        { title: "Hip Revision Tray · T-087", meta: "Sterile processing · Autoclave", status: "Processing", tone: "neutral" }],

      action: "Scan tray barcode"
    }
  },
  {
    id: "rep",
    label: "Representative",
    icon: BriefcaseIcon,
    description: "Create sales, manage physicians, surgeries, purchase orders and shipments.",
    screen: {
      greeting: "Good morning, Jordan",
      title: "Today in the field",
      stats: [{ label: "Sales this month", value: "$48.2k" }, { label: "Commission", value: "$3,860" }],
      items: [
        { title: "Spinal fusion · Dr. Patel", meta: "7:30 AM · St. Mary's OR 4", status: "Surgery", tone: "brand" },
        { title: "PO-3391 · Medline", meta: "Standard order", status: "Approved", tone: "success" },
        { title: "SHP-20418 · Tray T-112", meta: "Warehouse → St. Mary's", status: "In transit", tone: "brand" }],

      action: "New sale"
    }
  },
  {
    id: "manager",
    label: "Manager",
    icon: UserCogIcon,
    description: "Review sales, approve operations, manage inventory and coordinate drivers.",
    screen: {
      greeting: "Good morning, Dana",
      title: "Approval queue",
      stats: [{ label: "Pending approvals", value: "14" }, { label: "Drivers active", value: "6" }],
      items: [
        { title: "SL-10481 · $8,920", meta: "L. Chen · Dr. Moore", status: "Review", tone: "warning" },
        { title: "PO-3390 · $42,900", meta: "Bulk bio · BioGraft Labs", status: "Review", tone: "warning" },
        { title: "SHP-20415", meta: "Warehouse → Mercy General", status: "Assign driver", tone: "brand" }],

      action: "Open queue"
    }
  },
  {
    id: "driver",
    label: "Driver",
    icon: TruckIcon,
    description: "Accept delivery jobs, navigate routes, update shipment status and manage earnings.",
    screen: {
      greeting: "Hi, Marcus",
      title: "Delivery jobs",
      stats: [{ label: "Jobs today", value: "5" }, { label: "Earnings this week", value: "$612" }],
      items: [
        { title: "SHP-20418", meta: "Warehouse → St. Mary's", status: "In transit", tone: "brand" },
        { title: "SHP-20419", meta: "Pickup · Baptist Health · 3:30 PM", status: "New job", tone: "warning" },
        { title: "SHP-20412", meta: "Delivered 11:05 AM", status: "Done", tone: "success" }],

      action: "Update status"
    }
  },
  {
    id: "finance",
    label: "Finance",
    icon: WalletIcon,
    description: "Track commissions, vendor payments, expenses and financial activity.",
    screen: {
      greeting: "Hi, Priya",
      title: "Finance overview",
      stats: [{ label: "Vendor payments due", value: "$74.1k" }, { label: "Commission scheduled", value: "$24.8k" }],
      items: [
        { title: "VP-771 · BioGraft Labs", meta: "$31,200 · PO-3385", status: "Paid", tone: "success" },
        { title: "CM-2204 · J. Rivera", meta: "$2,108 · SL-10473", status: "Scheduled", tone: "brand" },
        { title: "EX-918 · Territory SE", meta: "$640 · Travel", status: "Pending", tone: "warning" }],

      action: "Export report"
    }
  },
  {
    id: "admin",
    label: "Admin",
    icon: ShieldCheckIcon,
    description: "Control users, operations, inventory, logistics and overall system activity.",
    screen: {
      greeting: "Admin console",
      title: "System overview",
      stats: [{ label: "Active users", value: "248" }, { label: "Territories", value: "12" }],
      items: [
        { title: "New user · A. Kim", meta: "Sales Rep · Northeast", status: "Invited", tone: "warning" },
        { title: "Role updated · Finance", meta: "Permissions changed", status: "Logged", tone: "neutral" },
        { title: "Inventory audit · Q3", meta: "Warehouse A", status: "Complete", tone: "success" }],

      action: "Manage users"
    }
  },
  {
    id: "executive",
    label: "Executive",
    icon: TrendingUpIcon,
    description: "Monitor real-time territory revenue, margins, rep commissions, and hospital case volumes.",
    screen: {
      greeting: "Executive briefing",
      title: "Territory performance",
      stats: [{ label: "Monthly revenue", value: "$452k" }, { label: "Gross margin", value: "34.2%" }],
      items: [
        { title: "Metro Hospital System", meta: "18 surgeries · 99.4% on-time", status: "Top tier", tone: "success" },
        { title: "Territory Southeast", meta: "Ahead of Q3 target (+14%)", status: "Growth", tone: "brand" },
        { title: "Tray turnaround cycle", meta: "92% same-day return", status: "Optimal", tone: "success" }],

      action: "Executive report"
    }
  }];


export const logisticsStatuses = [
  { label: "Pickup scheduled", time: "1:30 PM", done: true },
  { label: "Driver assigned", time: "1:34 PM", done: true },
  { label: "In transit", time: "1:52 PM", done: true },
  { label: "Delivered", time: "Est. 2:40 PM", done: false }];


export const inventoryCategories: InventoryCategory[] = [
  {
    id: "implants",
    label: "Implants",
    available: 1284,
    assigned: 312,
    moving: 46,
    items: [
      { name: "Pedicle Screw 6.5×45mm", serial: "SN-PS-88213", location: "Main warehouse · A3", status: "Available", tone: "success" },
      { name: "Cervical Plate, 4-level", serial: "SN-CP-40517", location: "SHP-20418", status: "In movement", tone: "brand" },
      { name: "Interbody Cage 10mm", serial: "SN-IC-11902", location: "J. Rivera · Kit 4", status: "Assigned", tone: "brand" },
      { name: "Hip Stem, Size 12", serial: "SN-HS-77310", location: "Main warehouse · C1", status: "Available", tone: "success" }]

  },
  {
    id: "trays",
    label: "Trays",
    available: 38,
    assigned: 12,
    moving: 5,
    items: [
      { name: "Spinal Fusion Tray", serial: "T-112", location: "St. Mary's · OR 4", status: "Assigned", tone: "brand" },
      { name: "Hip Revision Tray", serial: "T-087", location: "Sterile processing", status: "Processing", tone: "neutral" },
      { name: "Cervical Instrument Tray", serial: "T-131", location: "Main warehouse · T2", status: "Available", tone: "success" },
      { name: "Knee Primary Tray", serial: "T-064", location: "SHP-20415", status: "In movement", tone: "brand" }]

  },
  {
    id: "bio",
    label: "Bio Products",
    available: 214,
    assigned: 40,
    moving: 9,
    items: [
      { name: "Bone Allograft 10cc", serial: "LOT-BG-2291", location: "Cold storage · B", status: "Low stock", tone: "warning" },
      { name: "DBM Putty 5cc", serial: "LOT-DB-1180", location: "Cold storage · A", status: "Available", tone: "success" },
      { name: "Amniotic Membrane 4×4", serial: "LOT-AM-0472", location: "L. Chen · Kit 2", status: "Assigned", tone: "brand" },
      { name: "Cortical Fibers 2.5cc", serial: "LOT-CF-3308", location: "PO-3390 inbound", status: "Inbound", tone: "neutral" }]

  }];


export const inventoryMovement = [
  { step: "Received", place: "Main warehouse", time: "Sep 18" },
  { step: "Assigned", place: "J. Rivera", time: "Sep 21" },
  { step: "Shipped", place: "SHP-20418", time: "Sep 23 · 1:52 PM" },
  { step: "Surgery", place: "St. Mary's OR 4", time: "Sep 24 · 7:30 AM" }];


export const financeSeries = [
  { month: "Apr", revenue: 312, commission: 38 },
  { month: "May", revenue: 348, commission: 42 },
  { month: "Jun", revenue: 336, commission: 40 },
  { month: "Jul", revenue: 392, commission: 47 },
  { month: "Aug", revenue: 418, commission: 51 },
  { month: "Sep", revenue: 452, commission: 55 }];


export const financeMetrics = [
  { label: "Commission", value: 54860, change: "+7.4%", share: 72 },
  { label: "Vendor Payments", value: 128400, change: "+3.1%", share: 88 },
  { label: "Expenses", value: 18240, change: "−2.0%", share: 34 },
  { label: "Shipping Costs", value: 6920, change: "+1.2%", share: 18 }];


export const commissionPipeline = [
  { label: "Awaiting approval", count: 18, amount: "$9.2k" },
  { label: "Approved", count: 42, amount: "$21.4k" },
  { label: "Paid this month", count: 67, amount: "$24.3k" }];


export const adminNav = [
  { label: "Overview", icon: LayoutDashboardIcon },
  { label: "Users", icon: UsersIcon },
  { label: "Roles", icon: KeyRoundIcon },
  { label: "Inventory", icon: BoxesIcon },
  { label: "Shipments", icon: TruckIcon },
  { label: "Sales", icon: TrendingUpIcon },
  { label: "Finance", icon: ReceiptIcon },
  { label: "Reports", icon: FileTextIcon },
  { label: "System Activity", icon: ActivityIcon },
  { label: "Territories", icon: MapIcon }];


export const adminKpis = [
  { label: "Active users", value: "248", note: "across 5 roles" },
  { label: "Open shipments", value: "36", note: "9 in transit" },
  { label: "Pending approvals", value: "14", note: "sales & POs" },
  { label: "Inventory units", value: "1,536", note: "3 categories" }];


export const usersByRole = [
  { role: "Sales Reps", count: 142 },
  { role: "Managers", count: 24 },
  { role: "Drivers", count: 58 },
  { role: "Finance", count: 16 },
  { role: "Admins", count: 8 }];


export const systemActivity = [
  { time: "14:02", actor: "D. Whitfield", text: "approved SL-10481 · $8,920" },
  { time: "13:58", actor: "M. Lewis", text: "set SHP-20418 to In transit" },
  { time: "13:41", actor: "P. Shah", text: "paid vendor invoice VP-771" },
  { time: "13:20", actor: "System", text: "flagged LOT-BG-2291 as low stock" },
  { time: "12:55", actor: "Admin", text: "invited alex@northside.org as Sales Rep" }];


export const mobileScreens: { label: string; screen: PhoneScreenData; }[] = [
  {
    label: "Rep dashboard",
    screen: {
      greeting: "Good morning, Jordan",
      title: "Today",
      stats: [{ label: "Sales MTD", value: "$48.2k" }, { label: "Surgeries", value: "3" }],
      items: [
        { title: "Dr. Patel · Spinal fusion", meta: "7:30 AM · St. Mary's", status: "Surgery", tone: "brand" },
        { title: "PO-3391", meta: "Medline Surgical", status: "Approved", tone: "success" }],

      action: "New sale"
    }
  },
  {
    label: "Sales creation",
    screen: {
      greeting: "Step 2 of 3",
      title: "New sale",
      stats: [{ label: "Physician", value: "Dr. Patel" }, { label: "Facility", value: "St. Mary's" }],
      items: [
        { title: "Pedicle Screw 6.5×45", meta: "SN-PS-88213", status: "×4", tone: "neutral" },
        { title: "Interbody Cage 10mm", meta: "SN-IC-11902", status: "×1", tone: "neutral" }],

      action: "Submit for approval"
    }
  },
  {
    label: "Inventory",
    screen: {
      greeting: "My kit",
      title: "Trays",
      stats: [{ label: "Available", value: "38" }, { label: "Assigned", value: "12" }],
      items: [
        { title: "Spinal Fusion Tray", meta: "T-112 · OR 4", status: "Assigned", tone: "brand" },
        { title: "Cervical Tray", meta: "T-131 · Warehouse", status: "Available", tone: "success" }],

      action: "Scan item"
    }
  },
  {
    label: "Shipment",
    screen: {
      greeting: "Shipment",
      title: "SHP-20418",
      stats: [{ label: "Status", value: "In transit" }, { label: "ETA", value: "2:40 PM" }],
      items: [
        { title: "Picked up", meta: "Main warehouse · 1:52 PM", status: "Done", tone: "success" },
        { title: "Drop-off", meta: "St. Mary's · OR 4", status: "Next", tone: "brand" }],

      action: "View details"
    }
  },
  {
    label: "Driver delivery",
    screen: {
      greeting: "Drop-off",
      title: "Confirm delivery",
      stats: [{ label: "Destination", value: "OR 4" }, { label: "Items", value: "1 tray" }],
      items: [
        { title: "Recipient signature", meta: "Charge nurse", status: "Required", tone: "warning" },
        { title: "Photo proof", meta: "1 photo added", status: "Added", tone: "success" }],

      action: "Mark delivered"
    }
  },
  {
    label: "Earnings",
    screen: {
      greeting: "This week",
      title: "Earnings",
      stats: [{ label: "Total", value: "$612" }, { label: "Jobs", value: "23" }],
      items: [
        { title: "Wednesday", meta: "5 deliveries", status: "$142", tone: "neutral" },
        { title: "Tuesday", meta: "4 deliveries", status: "$118", tone: "neutral" }],

      action: "Payout details"
    }
  }];


export const footerColumns = [
  { title: "Platform", links: ["Sales", "Inventory", "Logistics", "Purchase Orders", "Finance", "Administration"] },
  { title: "Roles", links: ["Sales Reps", "Managers", "Drivers", "Finance", "Admins"] },
  { title: "Company", links: ["About", "Security", "Contact", "Request a demo"] }];