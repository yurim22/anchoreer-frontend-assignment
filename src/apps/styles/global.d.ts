declare module '*.scss' {
  const content: { [className: string]: string }
  // content를 다시 선언하지 않음, 타입만 선언
  export default content
}
