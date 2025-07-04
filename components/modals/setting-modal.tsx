"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
} from "@/components/ui/dialog";

import { useSettings } from "@/hooks/use-settings";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/mode-toggel";


export const SettingModal = () => {
    const setting = useSettings();

    return(
        <Dialog open={setting.isOpen} onOpenChange={setting.onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <h2 className="text-lg font-medium">
                        My Setting
                    </h2>
                </DialogHeader>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1">
                        <Label>
                            Appearance
                        </Label>
                        <span className="text-[0.8rem] text-muted-foreground">
                            Customize how your 2Brain look on your device.
                        </span>
                    </div>
                    <ModeToggle />
                </div>
            </DialogContent>
        </Dialog>
    );
};