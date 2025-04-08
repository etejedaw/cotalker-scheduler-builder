import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const PBChannelAddUserSchema = z.object({
	type: z.string(),
	user: z.string(),
	accessRole: z.string(),
	property: z.string(),
	channel: z.string(),
	operation: z.string()
});
type PBChannelAddUserData = z.infer<typeof PBChannelAddUserSchema>;

interface NextStage {
	ADDED: string;
	"NOT-ADDED": string;
}

export class PBChannelAddUserBuilder extends StageBuilder<
	PBChannelAddUserData,
	NextStage
> {
	constructor(key: string) {
		super(key, "PBChannelAddUser", null, PBChannelAddUserSchema);
		this.next.ADDED = "";
		this.next["NOT-ADDED"] = "";
	}

	setType(type: string): this {
		this.data.type = type;
		return this;
	}

	setUser(user: string): this {
		this.data.user = user;
		return this;
	}

	setAccessRole(accessRole: string): this {
		this.data.accessRole = accessRole;
		return this;
	}

	setProperty(property: string): this {
		this.data.property = property;
		return this;
	}

	setChannel(channel: string): this {
		this.data.channel = channel;
		return this;
	}

	setOperation(operation: string): this {
		this.data.operation = operation;
		return this;
	}

	setAdded(key: string): this {
		this.next.ADDED = key;
		return this;
	}

	setNotAdded(key: string): this {
		this.next["NOT-ADDED"] = key;
		return this;
	}
} 