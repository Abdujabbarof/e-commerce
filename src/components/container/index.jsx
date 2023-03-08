import s from './container.module.scss'

export const Container = ({children,type,className}) => {
  let clsName;
  switch(type){
    case "xxl":
      clsName = s.containerXXL;
      break;
    case "xl":
      clsName = s.containerXL;
      break;
    case "lg":
      clsName = s.containerLG;
      break;
    case "md":
      clsName = s.containerMD;
      break;
    case "sm":
      clsName = s.containerSM;
      break;
    default:
      clsName = s.containerXS;
  }
  if(className){
    clsName += ` ${className}`
  }
  return (
    <div className={clsName}>
      {children}
    </div>
  )
}
