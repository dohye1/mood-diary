import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  selfPromise: {
    type: String,
    default: ''
  },
  diaries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Diary'
    }
  ],
  token: String
});

const model = mongoose.model('User', userSchema);

export default model;
