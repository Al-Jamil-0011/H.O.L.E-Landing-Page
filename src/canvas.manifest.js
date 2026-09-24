export const manifest = {
  screens: {
    scr_0pdgod: { name: "Hero", route: "/#top", position: { "x": 160, "y": 220 } },
    scr_67epsn: { name: "The Problem", route: "/#problem-title", position: { "x": 1560, "y": 220 } },
    scr_0lzmeb: { name: "Connected Ecosystem", route: "/#ecosystem", position: { "x": 160, "y": 2200 } },
    scr_tvm0x7: { name: "How It Works", route: "/#how", position: { "x": 1560, "y": 2200 } },
    scr_j6cqzl: { name: "Core Features", route: "/#features", position: { "x": 2960, "y": 2200 } },
    scr_2qkakx: { name: "Role-Based Experience", route: "/#roles", position: { "x": 160, "y": 4180 } },
    scr_v12oag: { name: "Smart Logistics", route: "/#logistics", position: { "x": 1560, "y": 4180 } },
    scr_cujtt0: { name: "Inventory Visibility", route: "/#inventory-title", position: { "x": 2960, "y": 4180 } },
    scr_nyhqq9: { name: "Finance & Commission", route: "/#finance", position: { "x": 4360, "y": 4180 } },
    scr_2jy7t4: { name: "Admin Control Center", route: "/#admin-title", position: { "x": 5760, "y": 4180 } },
    scr_6m36fk: { name: "Mobile App", route: "/#mobile-title", position: { "x": 160, "y": 6160 } },
    scr_jdo50e: { name: "Final CTA", route: "/#demo", position: { "x": 1560, "y": 6160 } }
  },
  sections: {
    sec_t3c15k: { name: "Hero & Problem", x: 0, y: 0, width: 2920, height: 1180 },
    sec_5sv5y1: { name: "Solution Overview", x: 0, y: 1980, width: 4320, height: 1180 },
    sec_3c9szg: { name: "Core Experience & Features", x: 0, y: 3960, width: 7120, height: 1180 },
    sec_gqu65c: { name: "Mobile & Conversion", x: 0, y: 5940, width: 2920, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_t3c15k", children: [
    { kind: "screen", id: "scr_0pdgod" },
    { kind: "screen", id: "scr_67epsn" }]
  },
  { kind: "section", id: "sec_5sv5y1", children: [
    { kind: "screen", id: "scr_0lzmeb" },
    { kind: "screen", id: "scr_tvm0x7" },
    { kind: "screen", id: "scr_j6cqzl" }]
  },
  { kind: "section", id: "sec_3c9szg", children: [
    { kind: "screen", id: "scr_2qkakx" },
    { kind: "screen", id: "scr_v12oag" },
    { kind: "screen", id: "scr_cujtt0" },
    { kind: "screen", id: "scr_nyhqq9" },
    { kind: "screen", id: "scr_2jy7t4" }]
  },
  { kind: "section", id: "sec_gqu65c", children: [
    { kind: "screen", id: "scr_6m36fk" },
    { kind: "screen", id: "scr_jdo50e" }]
  }]

};