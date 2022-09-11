import React from "react";
import ContentCard from "../../component/ContentCard";

const OverView = () => {
  return <ContentCard card={false}>
    <div style={{ height: 200, padding: '30px 0', backgroundImage: '' }}>
      <div style={{ fontSize: 20, fontWeight: 400 }}>欢迎来到云服务器</div>
      <div>云服务器ECS（Elastic Compute Server）是一种由CPU、内存、云盘组成的资源集合，每一种资源都会逻辑对应到数据中心的计算硬件实体。</div>
    </div>
  </ContentCard>
}

export default OverView