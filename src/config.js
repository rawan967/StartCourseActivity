// عنوان الـ backend. غيّريه من ملف .env (VITE_API_URL) من غير ما تلمسي الكود.
// export const API_URL = 'http://localhost:5550';
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5550';

export const EVENT_ID = '7-14';

// إعدادات التايمر والنقاط (عدّليهم براحتك)
export const TIME_LIMIT = 60;   // ثواني لكل سؤال
export const BASE_POINTS = 5;   // نقاط الإجابة الصح
export const MAX_BONUS = 5;     // أقصى بونص للسرعة (بيقل كل ما الوقت يعدي)