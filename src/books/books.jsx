import {mark, all_chapters_mark} from "./mark/mark";
import {nehemiah, all_chapters} from "./nehemiah/nehemiah";
import general_knowledge from "./general_bible_knowledge/general_knowledge";

import newTestament from "./general_bible_knowledge/new/all_new";
import oldTestament from "./general_bible_knowledge/old/all_old";


const all_books = [...all_chapters, ...all_chapters_mark, ...newTestament, ...oldTestament]
const combined = [
    { name: "All", content:  all_books,
}]

const books = [
    {name: 'Mark', content: mark},
    {name: 'Nehemiah', content: nehemiah},
    {name: 'General Knowledge', content: general_knowledge},
    {name: 'All', content: combined},
];

export default books;
