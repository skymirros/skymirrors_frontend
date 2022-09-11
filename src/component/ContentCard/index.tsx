import { Card } from "@arco-design/web-react";
import React, { ReactElement } from "react";


interface ContentCardProps {
  card: boolean
  children?: ReactElement | string
  title?: string | ReactElement,

}
const ContentCard = (props: ContentCardProps) => {
  return <div style={{
    boxSizing: 'border-box',
    height: '100%',
    border: '16px solid rgb(242,243,249)',
    backgroundColor: 'rgb(242,243,249)',
  }}>
    {
      props?.card
        ?
        <Card title={props?.title} bordered={false}>
          {props?.children}
        </Card>
        :
        <div style={{ backgroundColor: '#fff', padding: 20 }}>{props?.children}</div>
    }


  </div>
}

export default ContentCard