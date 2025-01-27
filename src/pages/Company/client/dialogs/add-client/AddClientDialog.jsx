import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"

export const AddClientDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn btn-sm btn-primary">Add Client</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Client</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4 px-8">
          <input className="input" placeholder="Company Name" />
          <input className="input" placeholder="Company Email" />
          <input className="input" placeholder="LinkedIn" />
          <input className="input" placeholder="GST Number" />
        </div>

        <DialogFooter>
          <button className="btn btn-primary">Save Client</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
