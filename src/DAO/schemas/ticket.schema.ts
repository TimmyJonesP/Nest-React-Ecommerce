import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'tickets' })
export class Ticket {
  @Prop({ unique: true })
  code: string;

  @Prop({ default: Date.now })
  purchase_datetime: Date;

  @Prop()
  amount: number;

  @Prop()
  purchaser: string;

  @Prop([Object])
  processProducts: Record<string, any>[];
}
export const TicketSchema = SchemaFactory.createForClass(Ticket);
