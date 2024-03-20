import { create } from "zustand";
import question from "@/jsons/games-daybygone.json";
import { TCurrQues } from "@/types";

export const useDBGStore = create((set) => ({
  life: 3,
  i: 0,
  countQues: question.length,
  questions: undefined,
  currQues: undefined,
  checking: false,
  chart: [],
  score: 0,
  isWin: true,
  gameStats: {
    played: 0,
    win: 0,
    lose: 0
  },
  setGameStats: (data:any) => set((state:any) => ({ gameStats: data })),
  subLife: () => set((state: { life: number }) => ({ life: state.life - 1 })),
  setCurrQues: (ques: any) =>
    set((state: { currQues: any }) => ({ currQues: ques })),
  setQuestions: (ques: any) =>
    set((state: { questions: any }) => ({ questions: ques })),
  nextQues: () =>
    set(
      (state: {
        currQues: TCurrQues;
        i: number;
        countQues: number;
        checking: boolean;
        questions: any;
      }) => {
        if (state.i <= state.countQues - 1) {
          return {
            currQues: state.questions[state.i + 1],
            i: state.i + 1,
            checking: false,
          };
        } else
          return {
            currQues: state.questions[0],
            i: 0,
          };
      }
    ),
  setChecking: () =>
    set((state: { checking: boolean }) => ({ checking: !state.checking })),
  setWin: () => set((state: { isWin: boolean }) => ({ isWin: !state.isWin })),
  setScore: () =>
    set((state: { score: number }) => ({ score: state.score + 1 })),
  setChart: (item: string) =>
    set((state: { chart: string[] }) => ({ chart: [...state.chart, item] })),
  newGame: (ques: any) =>
    set((state: any) => ({
      life: 3,
      i: 0,
      countQues: question.length,
      questions: ques,
      currQues: ques[0],
      checking: false,
      chart: [],
      score: 0,
    })),
}));
