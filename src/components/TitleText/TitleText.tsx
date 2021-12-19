import React, {forwardRef} from 'react'
import AnimatedText from '../../components/animatedText/AnimatedText'
import {LabelType } from '../../data/myProfile'
import LabelIcon from '../../components/LabelIcon/LabelIcon';

interface Props {
  className?: string;
  text: string
  label: LabelType;
}

const TitleText = forwardRef<HTMLDivElement, Props>(({className, text, label}, ref) => {


  return (
    <div ref={ref} className={`${className} flex content-center items-center gap-4`}>
      <div className="z-10"><h1><AnimatedText className={`animated-text text-4xl text-shadow-1`} text={text} variant={'subtitle'}/></h1></div>
      <div className="z-0"><LabelIcon labelType={label} className="title-icon text-7xl inline-block transform -rotate-45 -translate-x-10 text-blue-800" /></div>
    </div>
  )
})

export default TitleText
