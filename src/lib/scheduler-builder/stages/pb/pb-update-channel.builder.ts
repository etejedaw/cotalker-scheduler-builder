import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const PBUpdateChannelSchema = z.object({
	channelId: z.string(),
	group: z.string().optional(),
	nameCode: z.string().optional(),
	nameDisplay: z.string().optional(),
	userIds: z.array(z.string()).optional(),
	propertyIds: z.array(z.string()).optional(),
	groupOwnerIds: z.array(z.string()).optional(),
	isActive: z.boolean().optional(),
	settingsDisplay: z.string().optional(),
	settingsWrite: z.string().optional(),
	settingsRead: z.string().optional(),
	image: z.string().optional()
});
type PBUpdateChannelData = z.infer<typeof PBUpdateChannelSchema>;

export class PBUpdateChannelBuilder extends StageBuilder<PBUpdateChannelData> {
	constructor(key: string) {
		super(key, "PBUpdateChannel", "3.0.0", PBUpdateChannelSchema);
		this.next.ERROR = "";
		this.next.SUCCESS = "";
	}

	setChannelId(channelId: string): this {
		this.data.channelId = channelId;
		return this;
	}

	setGroup(groupId: string): this {
		this.data.channelId = groupId;
		return this;
	}

	setNameCode(code: string): this {
		this.data.nameCode = code;
		return this;
	}

	setNameDisplay(display: string): this {
		this.data.nameDisplay = display;
		return this;
	}

	setUserIds(userIds: string[]): this {
		this.data.userIds = userIds;
		return this;
	}

	setPropertyIds(propertyIds: string[]): this {
		this.data.propertyIds = propertyIds;
		return this;
	}

	setGroupOwnerIds(groupOwnerIds: string[]): this {
		this.data.groupOwnerIds = groupOwnerIds;
		return this;
	}

	setIsActive(activate: boolean): this {
		this.data.isActive = activate;
		return this;
	}
	setSettingsDisplay(settingsDisplay: string): this {
		this.data.settingsDisplay = settingsDisplay;
		return this;
	}

	setSettingsWrite(settingsWrite: string): this {
		this.data.settingsWrite = settingsWrite;
		return this;
	}

	setSettingsRead(settingsRead: string): this {
		this.data.settingsRead = settingsRead;
		return this;
	}

	setImage(imageCode: string): this {
		this.data.image = imageCode;
		return this;
	}
}
