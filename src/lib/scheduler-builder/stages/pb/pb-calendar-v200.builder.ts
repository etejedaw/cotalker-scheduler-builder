import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const PBCalendarv200Schema = z.object({
	title: z.string(),
	description: z.string().optional(),
	initialDate: z.string(),
	durationMinutes: z.number(),
	invitedById: z.array(z.string()).optional(), 
	invitedByEmail: z.array(z.string()).optional(),
	owner: z.string() 
});
type PBCalendarv200Data = z.infer<typeof PBCalendarv200Schema>;

interface NextStage {
	DEFAULT: string;
}

export class PBCalendarv200Builder extends StageBuilder<
	PBCalendarv200Data,
	NextStage
> {
	constructor(key: string) {
		super(key, "PBCalendar", "2.0.0", PBCalendarv200Schema);
		this.next.DEFAULT = "";
	}

	setTitle(title: string): this {
		this.data.title = title;
		return this;
	}

	setDescription(description: string): this {
		this.data.description = description;
		return this;
	}

	setInitialDate(initialDate: string): this {
		this.data.initialDate = initialDate;
		return this;
	}

	setDurationMinutes(durationMinutes: number): this {
		this.data.durationMinutes = durationMinutes;
		return this;
	}

	setInvitedById(invitedById: string[]): this {
		this.data.invitedById = invitedById;
		return this;
	}

	setInvitedByEmail(invitedByEmail: string[]): this {
		this.data.invitedByEmail = invitedByEmail;
		return this;
	}

	setOwner(owner: string): this {
		this.data.owner = owner;
		return this;
	}

	setDefault(key: string): this {
		this.next.DEFAULT = key;
		return this;
	}
} 