import mongoose from 'mongoose';

const diarySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  post_year: {
    type: Number,
    required: true
  },
  post_month: {
    type: Number,
    required: true
  },
  post_day: {
    type: Number,
    required: true
  },
  mood: {
    type: String,
    required: true,
    default: 'normal'
  },
  content: {
    type: String
  }
});

const model = mongoose.model('Diary', diarySchema);

export default model;
