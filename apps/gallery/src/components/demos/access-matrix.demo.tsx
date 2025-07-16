"use client"

import * as React from "react"
import { 
  AccessMatrix, 
  type AccessMatrixData, 
  type PermissionType,
} from "@lightmind/ui"
import { Check, X, Shield, ArrowLeftRight, Ban, CheckCircle2, Activity } from "lucide-react"

// Firewall Rules Matrix
const firewallData: AccessMatrixData = {
  rows: [
    { id: "internal", label: "Internal", description: "Internal network zone" },
    { id: "external", label: "External", description: "External/Internet zone" },
    { id: "gateway", label: "Gateway", description: "Gateway/Router zone" },
    { id: "vpn", label: "VPN", description: "VPN client zone" },
    { id: "hotspot", label: "Hotspot", description: "Guest WiFi zone" },
    { id: "dmz", label: "DMZ", description: "Demilitarized zone" },
  ],
  columns: [
    { id: "internal", label: "Internal" },
    { id: "external", label: "External" },
    { id: "gateway", label: "Gateway" },
    { id: "vpn", label: "VPN" },
    { id: "hotspot", label: "Hotspot" },
    { id: "dmz", label: "DMZ" },
  ],
  cells: {
    internal: { 
      internal: { value: "allow-all" }, 
      external: { value: "policy" }, 
      gateway: { value: "allow-all" }, 
      vpn: { value: "allow-all" }, 
      hotspot: { value: "block" }, 
      dmz: { value: "policy" } 
    },
    external: { 
      internal: { value: "return" }, 
      external: { value: "block" }, 
      gateway: { value: "return" }, 
      vpn: { value: "block" }, 
      hotspot: { value: "block" }, 
      dmz: { value: "policy" } 
    },
    gateway: { 
      internal: { value: "allow-all" }, 
      external: { value: "policy" }, 
      gateway: { value: "allow-all" }, 
      vpn: { value: "allow-all" }, 
      hotspot: { value: "policy" }, 
      dmz: { value: "policy" } 
    },
    vpn: { 
      internal: { value: "allow-all" }, 
      external: { value: "block" }, 
      gateway: { value: "allow-all" }, 
      vpn: { value: "allow-all" }, 
      hotspot: { value: "block" }, 
      dmz: { value: "block" } 
    },
    hotspot: { 
      internal: { value: "block" }, 
      external: { value: "policy" }, 
      gateway: { value: "policy" }, 
      vpn: { value: "block" }, 
      hotspot: { value: "allow-all" }, 
      dmz: { value: "block" } 
    },
    dmz: { 
      internal: { value: "return" }, 
      external: { value: "policy" }, 
      gateway: { value: "policy" }, 
      vpn: { value: "block" }, 
      hotspot: { value: "block" }, 
      dmz: { value: "allow-all" } 
    },
  }
}

const firewallPermissions: PermissionType[] = [
  { value: "allow-all", label: "Allow All", color: "hsl(142 71% 45%)", backgroundColor: "hsl(142 71% 45% / 0.15)", icon: <CheckCircle2 className="h-4 w-4" /> },
  { value: "policy", label: "Policies", color: "hsl(217 91% 60%)", backgroundColor: "hsl(217 91% 60% / 0.15)", icon: <Shield className="h-4 w-4" /> },
  { value: "return", label: "Return Traffic", color: "hsl(38 92% 50%)", backgroundColor: "hsl(38 92% 50% / 0.15)", icon: <ArrowLeftRight className="h-4 w-4" /> },
  { value: "block", label: "Block All", color: "hsl(0 84% 60%)", backgroundColor: "hsl(0 84% 60% / 0.15)", icon: <Ban className="h-4 w-4" /> },
]

// NAS File Share ACL
const nasData: AccessMatrixData = {
  rows: [
    { id: "documents", label: "Documents", description: "Shared documents folder" },
    { id: "media", label: "Media Library", description: "Photos, videos, music" },
    { id: "backups", label: "Backups", description: "System and user backups" },
    { id: "software", label: "Software", description: "Applications and installers" },
    { id: "personal", label: "Personal Folders", description: "User home directories" },
    { id: "archive", label: "Archive", description: "Old project files" },
  ],
  columns: [
    { id: "admin", label: "Admin", description: "System administrators" },
    { id: "users", label: "Users", description: "Regular users" },
    { id: "guests", label: "Guests", description: "Guest access" },
    { id: "backup-service", label: "Backup Service", description: "Automated backup" },
    { id: "media-server", label: "Media Server", description: "Plex/Jellyfin" },
  ],
  cells: {
    documents: {
      admin: { value: "read-write" },
      users: { value: "read-write" },
      guests: { value: "read" },
      "backup-service": { value: "read" },
      "media-server": { value: "deny" },
    },
    media: {
      admin: { value: "read-write" },
      users: { value: "read-write" },
      guests: { value: "read" },
      "backup-service": { value: "read" },
      "media-server": { value: "read" },
    },
    backups: {
      admin: { value: "read-write" },
      users: { value: "deny" },
      guests: { value: "deny" },
      "backup-service": { value: "read-write" },
      "media-server": { value: "deny" },
    },
    software: {
      admin: { value: "read-write" },
      users: { value: "read" },
      guests: { value: "deny" },
      "backup-service": { value: "read" },
      "media-server": { value: "deny" },
    },
    personal: {
      admin: { value: "read-write" },
      users: { value: "owner" },
      guests: { value: "deny" },
      "backup-service": { value: "read" },
      "media-server": { value: "deny" },
    },
    archive: {
      admin: { value: "read-write" },
      users: { value: "read" },
      guests: { value: "deny" },
      "backup-service": { value: "read" },
      "media-server": { value: "deny" },
    },
  }
}

const nasPermissions: PermissionType[] = [
  { value: "read-write", label: "Read/Write", color: "hsl(142 71% 45%)", backgroundColor: "hsl(142 71% 45% / 0.15)", icon: <Check className="h-4 w-4" /> },
  { value: "read", label: "Read Only", color: "hsl(217 91% 60%)", backgroundColor: "hsl(217 91% 60% / 0.15)", icon: <Shield className="h-4 w-4" /> },
  { value: "owner", label: "Owner Only", color: "hsl(38 92% 50%)", backgroundColor: "hsl(38 92% 50% / 0.15)", icon: <Activity className="h-4 w-4" /> },
  { value: "deny", label: "No Access", color: "hsl(0 84% 60%)", backgroundColor: "hsl(0 84% 60% / 0.15)", icon: <X className="h-4 w-4" /> },
]

// Audio Routing Matrix (Flipped - outputs as rows, inputs as columns)
const audioData: AccessMatrixData = {
  rows: [
    { id: "headphones", label: "Headphones", description: "Main headphone output" },
    { id: "stream", label: "Broadcast Stream Mix", description: "Streaming software mix" },
    { id: "line-out", label: "Line Out", description: "Line output" },
    { id: "chat-mic", label: "Chat Mic", description: "Voice chat microphone" },
  ],
  columns: [
    { id: "mic", label: "Mic", description: "Microphone input" },
    { id: "chat", label: "Chat", description: "Voice chat audio" },
    { id: "music", label: "Music", description: "Music/Media playback" },
    { id: "game", label: "Game", description: "Game audio" },
    { id: "console", label: "Console", description: "Console input" },
    { id: "line-in", label: "Line In", description: "Line input" },
    { id: "system", label: "System", description: "System sounds" },
    { id: "samples", label: "Samples", description: "Sample pad/soundboard" },
  ],
  cells: {
    headphones: {
      mic: { value: "monitor" },
      chat: { value: "on" },
      music: { value: "on" },
      game: { value: "on" },
      console: { value: "on" },
      "line-in": { value: "monitor" },
      system: { value: "on" },
      samples: { value: "on" },
    },
    stream: {
      mic: { value: "on" },
      chat: { value: "off" },
      music: { value: "on" },
      game: { value: "on" },
      console: { value: "on" },
      "line-in": { value: "off" },
      system: { value: "off" },
      samples: { value: "on" },
    },
    "line-out": {
      mic: { value: "off" },
      chat: { value: "off" },
      music: { value: "on" },
      game: { value: "off" },
      console: { value: "off" },
      "line-in": { value: "off" },
      system: { value: "on" },
      samples: { value: "off" },
    },
    "chat-mic": {
      mic: { value: "on" },
      chat: { value: "off" },
      music: { value: "off" },
      game: { value: "off" },
      console: { value: "off" },
      "line-in": { value: "off" },
      system: { value: "off" },
      samples: { value: "off" },
    },
  }
}

const audioPermissions: PermissionType[] = [
  { value: "on", label: "On", color: "hsl(142 71% 45%)", backgroundColor: "hsl(142 71% 45% / 0.15)", icon: <CheckCircle2 className="h-4 w-4" /> },
  { value: "monitor", label: "Monitor", color: "hsl(280 65% 60%)", backgroundColor: "hsl(280 65% 60% / 0.15)", icon: <Activity className="h-4 w-4" /> },
  { value: "off", label: "Off", color: "hsl(var(--muted-foreground))", backgroundColor: "hsl(var(--muted))", icon: <X className="h-4 w-4" /> },
]

export function AccessMatrixDemo() {
  const [firewallMatrix, setFirewallMatrix] = React.useState<AccessMatrixData>(firewallData)
  const [nasMatrix, setNasMatrix] = React.useState<AccessMatrixData>(nasData)
  const [audioMatrix, setAudioMatrix] = React.useState<AccessMatrixData>(audioData)

  const handleFirewallChange = (rowId: string, columnId: string, newValue: string) => {
    setFirewallMatrix((prevData) => ({
      ...prevData,
      cells: {
        ...prevData.cells,
        [rowId]: {
          ...prevData.cells[rowId],
          [columnId]: { value: newValue },
        },
      },
    }))
  }

  const handleNasChange = (rowId: string, columnId: string, newValue: string) => {
    setNasMatrix((prevData) => ({
      ...prevData,
      cells: {
        ...prevData.cells,
        [rowId]: {
          ...prevData.cells[rowId],
          [columnId]: { value: newValue },
        },
      },
    }))
  }

  const handleAudioChange = (rowId: string, columnId: string, newValue: string) => {
    setAudioMatrix((prevData) => ({
      ...prevData,
      cells: {
        ...prevData.cells,
        [rowId]: {
          ...prevData.cells[rowId],
          [columnId]: { value: newValue },
        },
      },
    }))
  }

  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Firewall Zone Matrix</h3>
        <p className="text-muted-foreground mb-6">
          Configure traffic flow between network zones
        </p>
        <AccessMatrix
          data={firewallMatrix}
          permissions={firewallPermissions}
          onCellChange={handleFirewallChange}
          clickBehavior="cycle"
          defaultValue="block"
          displayMode="text"
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">NAS File Share Permissions</h3>
        <p className="text-muted-foreground mb-6">
          Manage access rights for shared folders
        </p>
        <AccessMatrix
          data={nasMatrix}
          permissions={nasPermissions}
          onCellChange={handleNasChange}
          clickBehavior="cycle"
          defaultValue="deny"
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Audio Routing Matrix</h3>
        <p className="text-muted-foreground mb-6">
          Configure audio sources and output destinations
        </p>
        <AccessMatrix
          data={audioMatrix}
          permissions={audioPermissions}
          onCellChange={handleAudioChange}
          clickBehavior="cycle"
          defaultValue="off"
          rowTitle="Outputs"
          columnTitle="Audio Sources"
          verticalHeaders={true}
          isHidden={(rowId, columnId) => rowId === "chat-mic" && columnId === "chat"}
        />
      </div>
    </div>
  )
}