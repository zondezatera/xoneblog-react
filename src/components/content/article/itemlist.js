import React, { Component } from 'react';
import ItemView from './item';

class ItemListView extends Component {

  renderRow() {
    const mockupContent = [
      {
        title: 'Spotify ยืนยัน ศิลปินจะสามารถจำกัดอัลบั้มใหม่ให้ผู้ใช้เสียเงินฟังก่อนได้แล้ว',
        thumbnails:'https://www.blognone.com/sites/default/files/styles/thumbnail/public/topics-images/spotify500.png?itok=v3D6BnJW',
        description: 'Spotify ประกาศอย่างเป็นทางการว่า ต่อไปนี้ศิลปินจะสามารถเลือกจำกัดอัลบั้มให้ผู้ใช้แบบเสียเงินฟังได้เป็นเวลา 2 สัปดาห์ ตามข่าวลือที่ออกมาก่อนหน้านี้',
        userprofile: {
          id: '1',
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
        }
      },
      {
        title: '[Dota 2]  Fnatic ประกาศรายชื่อผู้เล่นชุดใหม่ ยังคงอยู่โซน SEA เช่นเดิม ',
        thumbnails:'https://www.blognone.com/sites/default/files/styles/thumbnail/public/news-thumbnails/Sports_Logo_-_Fnatic.png?itok=zDMACAjJ',
        description: 'หลังจากผ่านมรสุมมากมายอย่างการประกาศแยกทางกับ Mushi โปรเพลยเยอร์ที่อยู่ร่วมกับทีมมาอย่างยาวนาน และ ปัญหาการขาดตัวผู้เล่นจนไม่ได้เข้าแข่งรอบคัดเลือกงาน The Keiv Major แต่ล่าสุด Fnatic ต้นสังกัด eSport ชื่อดังได้ประกาศรายชื่อผู้เล่น Dota 2 ชุดใหม่เป็นที่เรียบร้อยแล้ว โดยจะยังคงอยู่ในโซน SEA เช่นเดิม',
        userprofile: {
          id: '1',
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
        }
      }
    ];
    return mockupContent.map((rowData) => {
      return (
        <ItemView
          title={rowData.title}
          thumbnails={rowData.thumbnails}
          description={rowData.description}
          userprofile={rowData.userprofile.name}
        />
      );
    })
  }

  render() {
    return (
      <div className="item-list-view">
        {this.renderRow.call(this)}
      </div>
    );
  }
}

export default ItemListView;