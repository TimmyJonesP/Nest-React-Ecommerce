import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    trim: true,
  })
  first_name: string;

  @Prop({
    trim: true,
  })
  last_name: string;

  @Prop({
    trim: true,
    unique: true,
  })
  email: string;

  @Prop({
    trim: true,
  })
  password: string;

  @Prop()
  age: number;

  @Prop({})
  @Prop()
  status: boolean;

  @Prop({
    enum: ['admin', 'user', 'premium'],
    default: 'user',
  })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
