import * as React from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Check, ClipboardList, Package, Layers, AlertCircle, Terminal, Play, Pause, RefreshCw } from 'lucide-react'

interface TaskItem {
  id: string
  text: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
}

interface CampaignItem {
  id: string
  creator: string
  videoTitle: string
  productSKU: string
  progress: number
  conversion: string
  status: 'active' | 'review' | 'paused'
}

const INITIAL_CAMPAIGNS: CampaignItem[] = [
  { id: '1', creator: '@shubham_make', videoTitle: 'Utility Streetwear Lookbook', productSKU: 'JKT-WRK-01', progress: 80, conversion: '4.8%', status: 'active' },
  { id: '2', creator: '@alex_fit', videoTitle: 'Urban Canvas Fit Guide', productSKU: 'JKT-WRK-01', progress: 40, conversion: '2.1%', status: 'active' },
  { id: '3', creator: '@sarah_styles', videoTitle: 'Minimalist Autumn Outerwear', productSKU: 'BAG-UTL-02', progress: 100, conversion: '7.5%', status: 'review' },
  { id: '4', creator: '@dev_designer', videoTitle: 'Core Utility Capsule Collection', productSKU: 'CAP-STR-03', progress: 10, conversion: '0.0%', status: 'paused' },
]

const INITIAL_TASKS: TaskItem[] = [
  { id: 't1', text: 'Map Canvas Worker Jacket to Creator @shubham_make summer reel', completed: false, priority: 'high' },
  { id: 't2', text: 'Audit commission split settings for creator @alex_fit', completed: true, priority: 'medium' },
  { id: 't3', text: 'Update pricing records for Bag Utility series in shop database', completed: false, priority: 'low' },
  { id: 't4', text: 'Verify Webhook events receiver state on checkout route', completed: false, priority: 'high' },
]

const PRODUCTS = [
  { sku: 'JKT-WRK-01', name: 'Canvas Worker Jacket', price: '$98.00', status: 'In Stock', count: 12 },
  { sku: 'BAG-UTL-02', name: 'Utility Cargo Bag', price: '$64.00', status: 'Low Stock', count: 8 },
  { sku: 'CAP-STR-03', name: 'Streetwear Canvas Cap', price: '$28.00', status: 'In Stock', count: 24 },
]

export const Home: React.FC = () => {
  const [tasks, setTasks] = React.useState<TaskItem[]>(INITIAL_TASKS)
  const [campaigns, setCampaigns] = React.useState<CampaignItem[]>(INITIAL_CAMPAIGNS)
  const [newTaskText, setNewTaskText] = React.useState('')
  const [btnLoadingId, setBtnLoadingId] = React.useState<string | null>(null)
  const [activeTab, setActiveTab] = React.useState<'overview' | 'campaigns' | 'products'>('overview')
  
  // Real-time terminal log feed state
  const [logs, setLogs] = React.useState<string[]>([
    'SYSTEM INITIALIZED: MakeWith Control Center Node v1.0.0',
    'DATABASE: Connection active on pool node-01',
    'CRON: Daily split payout execution completed successfully',
  ])

  // Programmatic logging utility
  const addLog = (message: string) => {
    const time = new Date().toLocaleTimeString()
    setLogs((prev) => [`[${time}] ${message}`, ...prev.slice(0, 9)])
  }

  // Handle incoming event from Navbar CTA button
  React.useEffect(() => {
    const handleCtaTrigger = () => {
      const id = 't_' + Date.now()
      const newCampaignTask: TaskItem = {
        id,
        text: 'Configure tracking tags for new incoming campaign request',
        completed: false,
        priority: 'high',
      }
      setTasks((prev) => [newCampaignTask, ...prev])
      addLog('NAVBAR ACTION: Dispatched job "Add new campaign tracking config"')
    }

    window.addEventListener('add-new-campaign-task', handleCtaTrigger)
    return () => window.removeEventListener('add-new-campaign-task', handleCtaTrigger)
  }, [])

  // Auto-generate minor mock logs for high-fidelity interactive feel
  React.useEffect(() => {
    const logPool = [
      'Split calculations synchronized for campaign #1',
      'Webhook received from creator API endpoint',
      'Telemetry payload dispatched to diagnostic server',
      'Cache cleared for static catalogs in product node',
      'Active commission contracts re-validated',
      'Database optimized query completed [3ms]',
    ]

    const interval = setInterval(() => {
      const randomMsg = logPool[Math.floor(Math.random() * logPool.length)]
      addLog(randomMsg)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const handleToggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
    const task = tasks.find(t => t.id === id)
    if (task) {
      addLog(`TASK STATUS: "${task.text.substring(0, 30)}..." updated to ${!task.completed ? 'COMPLETED' : 'ACTIVE'}`)
    }
  }

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTaskText.trim()) return

    const id = 't_' + Date.now()
    const newTask: TaskItem = {
      id,
      text: newTaskText.trim(),
      completed: false,
      priority: 'medium',
    }
    setTasks([newTask, ...tasks])
    addLog(`USER ACTION: Task created - "${newTaskText.trim().substring(0, 35)}..."`)
    setNewTaskText('')
  }

  const handleVerifyCampaign = (id: string, name: string) => {
    setBtnLoadingId(id)
    addLog(`PROCESS: Executing campaign checkout link validation for ${name}`)
    setTimeout(() => {
      setBtnLoadingId(null)
      addLog(`SUCCESS: Integrity check cleared for ${name}`)
    }, 1200)
  }

  const handleToggleCampaignStatus = (id: string) => {
    setCampaigns(prev => prev.map(c => {
      if (c.id === id) {
        const nextStatus = c.status === 'active' ? 'paused' : 'active'
        addLog(`CAMPAIGN STATUS: Set ${c.creator} campaign status to ${nextStatus.toUpperCase()}`)
        return { ...c, status: nextStatus }
      }
      return c
    }))
  }

  return (
    <div className="space-y-6 font-sans">
      {/* Dashboard Top Description Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-border">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Workspace Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage creator video checkout integrations, active product mapping, and split telemetry logs.
          </p>
        </div>

        {/* Tab Selection Row (shadcn styled) */}
        <div className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground select-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-xs font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${activeTab === 'overview' ? 'bg-background text-foreground shadow-sm' : 'hover:bg-muted-foreground/10'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('campaigns')}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-xs font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${activeTab === 'campaigns' ? 'bg-background text-foreground shadow-sm' : 'hover:bg-muted-foreground/10'}`}
          >
            Campaigns
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-xs font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${activeTab === 'products' ? 'bg-background text-foreground shadow-sm' : 'hover:bg-muted-foreground/10'}`}
          >
            Products Catalog
          </button>
        </div>
      </div>

      {/* Grid Key Metrics Row (shadcn card style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card hoverEffect={false}>
          <CardHeader className="p-6 pb-2 space-y-0 flex flex-row items-center justify-between">
            <CardDescription className="text-xs font-medium uppercase tracking-wider text-muted-foreground">TOTAL DIRECT REVENUE</CardDescription>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-500">▲ 8.4%</span>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="text-3xl font-bold tracking-tight text-foreground">$124,942.00</div>
            <p className="text-[11px] text-muted-foreground mt-1">Platform aggregate checks since last deployment</p>
          </CardContent>
        </Card>

        <Card hoverEffect={false}>
          <CardHeader className="p-6 pb-2 space-y-0 flex flex-row items-center justify-between">
            <CardDescription className="text-xs font-medium uppercase tracking-wider text-muted-foreground">ACTIVE CAMPAIGNS</CardDescription>
            <span className="text-xs font-medium text-muted-foreground">Live</span>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="text-3xl font-bold tracking-tight text-foreground">32</div>
            <p className="text-[11px] text-muted-foreground mt-1">28 verified live checkouts active now</p>
          </CardContent>
        </Card>

        <Card hoverEffect={false}>
          <CardHeader className="p-6 pb-2 space-y-0 flex flex-row items-center justify-between">
            <CardDescription className="text-xs font-medium uppercase tracking-wider text-muted-foreground">COMMISSION SPLIT POOL</CardDescription>
            <span className="text-xs font-medium text-muted-foreground">Multi-sig</span>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="text-3xl font-bold tracking-tight text-foreground">$14,840.00</div>
            <p className="text-[11px] text-muted-foreground mt-1">Split escrow node balances cleared</p>
          </CardContent>
        </Card>

        <Card hoverEffect={false} className="border-destructive/30 bg-destructive/5 dark:bg-destructive/10">
          <CardHeader className="p-6 pb-2 space-y-0 flex flex-row items-center justify-between">
            <CardDescription className="text-xs font-medium uppercase tracking-wider text-destructive-foreground dark:text-red-400 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>UNLINKED ITEMS</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="text-3xl font-bold tracking-tight text-foreground">3 Warnings</div>
            <p className="text-[11px] text-muted-foreground mt-1">Requires manual catalog verification</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Tab Views */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Columns (Tab content specific) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <Card hoverEffect={false}>
              <CardHeader className="border-b border-border pb-4 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-muted-foreground" />
                    <span>Active Campaigns Pipeline</span>
                  </CardTitle>
                  <CardDescription className="text-xs mt-1">Current status of creator shop integrations</CardDescription>
                </div>
                <Badge variant="outline" className="text-[10px] tracking-wider uppercase font-mono">Telemetry Node</Badge>
              </CardHeader>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-muted/40 text-muted-foreground font-medium text-xs">
                      <th className="p-4">Creator</th>
                      <th className="p-4">SKU Product</th>
                      <th className="p-4">Integration Sync</th>
                      <th className="p-4">Conversion</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((c) => (
                      <tr key={c.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="font-semibold text-foreground">{c.creator}</div>
                          <div className="text-xs text-muted-foreground">{c.videoTitle}</div>
                        </td>
                        <td className="p-4">
                          <Badge variant="secondary" className="font-mono text-[10px]">
                            {c.productSKU}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-24 bg-secondary rounded-full h-1.5 overflow-hidden">
                              <div
                                className="bg-primary h-1.5 rounded-full transition-all duration-300"
                                style={{ width: `${c.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-semibold text-muted-foreground">{c.progress}%</span>
                          </div>
                        </td>
                        <td className="p-4 font-semibold text-foreground">{c.conversion}</td>
                        <td className="p-4 text-right flex items-center justify-end gap-2 h-full py-6">
                          <Button
                            variant="ghost"
                            onClick={() => handleToggleCampaignStatus(c.id)}
                            className="h-8 px-2"
                            aria-label={c.status === 'active' ? 'Pause Campaign' : 'Start Campaign'}
                          >
                            {c.status === 'active' ? <Pause className="w-3.5 h-3.5 text-muted-foreground" /> : <Play className="w-3.5 h-3.5 text-muted-foreground" />}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            isLoading={btnLoadingId === c.id}
                            onClick={() => handleVerifyCampaign(c.id, c.creator)}
                            className="h-8 text-xs font-semibold"
                          >
                            Verify
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {/* CAMPAIGNS TAB (Filters list to details) */}
          {activeTab === 'campaigns' && (
            <Card hoverEffect={false}>
              <CardHeader className="border-b border-border">
                <CardTitle>Campaign Administration Node</CardTitle>
                <CardDescription>Comprehensive creator listing and split ratios configuration</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-4">
                  {campaigns.map((c) => (
                    <div key={c.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border rounded-lg bg-card/50 hover:bg-muted/10 transition-all gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-foreground">{c.creator}</span>
                          {c.status === 'active' && <Badge variant="default" className="bg-emerald-600 hover:bg-emerald-600/90 text-white text-[9px] px-1.5 py-0.2 rounded-full">Active</Badge>}
                          {c.status === 'review' && <Badge variant="secondary" className="text-[9px] px-1.5 py-0.2 rounded-full">In Review</Badge>}
                          {c.status === 'paused' && <Badge variant="outline" className="text-[9px] px-1.5 py-0.2 rounded-full">Paused</Badge>}
                        </div>
                        <p className="text-xs text-muted-foreground">{c.videoTitle}</p>
                        <div className="text-[11px] font-mono text-muted-foreground">Product Link: {c.productSKU} | Conversion Ratio: {c.conversion}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleVerifyCampaign(c.id, c.creator)} className="h-8 text-xs">
                          Test API Link
                        </Button>
                        <Button variant={c.status === 'active' ? 'outline' : 'primary'} size="sm" onClick={() => handleToggleCampaignStatus(c.id)} className="h-8 text-xs">
                          {c.status === 'active' ? 'Pause' : 'Activate'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* PRODUCTS TAB */}
          {activeTab === 'products' && (
            <Card hoverEffect={false}>
              <CardHeader className="border-b border-border">
                <CardTitle>Catalog Node Sync</CardTitle>
                <CardDescription>Product catalog mapped to creator referral nodes</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {PRODUCTS.map((prod) => (
                    <Card key={prod.sku} hoverEffect={true} className="p-4 space-y-3 bg-card border-border shadow-none">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="font-mono text-[10px]">{prod.sku}</Badge>
                        <Badge
                          variant={prod.status === 'In Stock' ? 'secondary' : 'destructive'}
                          className="text-[9px] px-1.5 py-0.2 font-semibold"
                        >
                          {prod.status}
                        </Badge>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-foreground">{prod.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">Price Index: {prod.price}</p>
                      </div>
                      <div className="pt-2 border-t border-border flex justify-between items-center text-xs text-muted-foreground">
                        <span>Connected Reels:</span>
                        <span className="font-bold text-foreground">{prod.count}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Shared Content: Products quick grid (visible in Overview) */}
          {activeTab === 'overview' && (
            <Card hoverEffect={false}>
              <CardHeader className="border-b border-border pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-muted-foreground" />
                  <span>Associated Product Catalog</span>
                </CardTitle>
                <CardDescription className="text-xs">Active products inventory and link counts</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {PRODUCTS.map((prod) => (
                    <div key={prod.sku} className="border border-border p-4 rounded-lg bg-card text-foreground shadow-sm space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono bg-secondary px-1.5 py-0.5 rounded font-bold text-secondary-foreground">
                          {prod.sku}
                        </span>
                        <span className={`w-2 h-2 rounded-full ${prod.status === 'In Stock' ? 'bg-emerald-500' : 'bg-destructive'} inline-block`}></span>
                      </div>
                      <h4 className="text-sm font-semibold text-foreground mt-2">{prod.name}</h4>
                      <div className="pt-3 flex justify-between items-center text-xs text-muted-foreground">
                        <span className="font-bold text-foreground">{prod.price}</span>
                        <span>{prod.count} references</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Columns: Tasks Checklist & Diagnostic Logs */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Interactive Checklist Queue */}
          <Card hoverEffect={false}>
            <CardHeader className="border-b border-border">
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-muted-foreground" />
                <span>Workspace Action Items</span>
              </CardTitle>
              <CardDescription className="text-xs mt-1">Pending campaign adjustments</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              
              {/* Task Add Form */}
              <form onSubmit={handleAddTask} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Create new control task..."
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  className="flex-1 bg-background border border-input rounded-md px-3 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring placeholder-muted-foreground shadow-sm"
                />
                <Button type="submit" size="sm" variant="outline" className="h-8 font-semibold">
                  Add
                </Button>
              </form>

              {/* Task Items */}
              <div className="space-y-2.5">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => handleToggleTask(task.id)}
                    className={`flex items-start gap-3 p-3 border border-border rounded-lg cursor-pointer select-none transition-colors duration-150 ${task.completed ? 'bg-muted/50 border-dashed' : 'hover:bg-muted/40'}`}
                  >
                    <div className={`mt-0.5 w-4 h-4 border rounded flex items-center justify-center transition-colors ${task.completed ? 'bg-primary border-primary text-primary-foreground' : 'border-input bg-background'}`}>
                      {task.completed && <Check className="w-3 h-3" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs leading-snug font-medium ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                        {task.text}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1.5 text-[10px] text-muted-foreground">
                        <Badge variant="outline" className="text-[8px] py-0 px-1 font-bold uppercase">{task.priority}</Badge>
                        <span>•</span>
                        <span>Control node</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Console Logs (shadcn styled terminal console sheet) */}
          <Card hoverEffect={false} className="border-border rounded-lg bg-zinc-950 dark:bg-zinc-950/80 text-zinc-400 p-4 font-mono text-[10px] leading-relaxed h-72 flex flex-col justify-between shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
              <span className="text-zinc-300 font-bold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                <span>workspace_logs_tty</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                <span className="text-[8px] text-zinc-500">LIVE</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto space-y-1.5 scrollbar-none pr-1">
              {logs.map((log, i) => (
                <div key={i} className={i === 0 ? 'text-zinc-100 font-bold' : ''}>
                  {log}
                </div>
              ))}
            </div>
            <div className="border-t border-zinc-900 pt-2 mt-2 text-zinc-600 flex justify-between items-center text-[9px]">
              <span className="flex items-center gap-1">
                <RefreshCw className="w-3 h-3 animate-spin" />
                <span>Telemetry Synchronized</span>
              </span>
              <span>HOST: localhost:5174</span>
            </div>
          </Card>

        </div>
      </div>
    </div>
  )
}
