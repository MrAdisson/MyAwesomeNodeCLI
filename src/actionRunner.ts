function actionErrorHanlder(error: Error) {
  console.error(error?.message);
}

export function actionRunner(fn: (...args: any[]) => Promise<any>) {
  return (...args: any) => fn(...args).catch(actionErrorHanlder);
}
