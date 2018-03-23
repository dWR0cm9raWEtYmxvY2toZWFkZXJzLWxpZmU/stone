const cnlist = {
  v1: {
    name: '巨蟹',
    position: 'GDEX.IO创始人 比特股理事',
    intro:
      '国内早期区块链项目布道者和投资者，比特创业营创始成员，水滴资本联合创始人，国内著名投资人。',
  },
  v2: {
    name: 'Stan Larimer',
    position: 'Cryptonomex公司CEO',
    intro:
      '2013年，Stan与Daniel Larimer（又名BM）一同创立bitshares，2015年共同创立Cryptonomex 公司任CEO，该公司提出石墨烯底层开发框架。Stan拥有40年的软、硬件、系统工程、项目管理等经验，参与过17个涉及海、陆、空系统的研发工作。',
  },
  v3: {
    name: 'Fabian Schuh',
    position: '区块链项目CTO',
    intro:
      'Fabian博士是一个企业家和区块链倡导者。比特股最早的核心开发者，他在区块链领域为多个项目担任技术顾问和开发，并在欧洲大范围推广区块链技术。',
  },
  v4: {
    name: 'Ronny Boesing',
    position: 'OpenLedger创始人兼CEO',
    intro:
      'OpenLedger是包含openledger去中心化交易所和提供众筹服务在内的生态系统。',
  },
  v5: {
    name: '赵薇(老狼)',
    position: 'Oracle Chain创始人兼CEO',
    company: 'OracleChain',
    intro:
      '2011年开始接触比特币，参与多项区块链社区项目（Peercoin、Factom、Bitshares），具有丰富的区块链行业经验。',
  },
  v6: {
    name: '黄敏强',
    position: '公信宝创始人兼CEO',
    intro:
      '前浙⼤⽹新互联⽹ 副总经理,在数据交换、互联网金融行业和区块链领域有超过10年的从业和研究经验。从2012年开始研究数字货币和区块链，参与并发起多个区块链项目，对区块链产品设计和数字货币经济模型设计有深度研究和实践。',
  },
  v7: {
    name: 'Ryan R. Fox',
    position: '比特股核心团队组织者',
    intro:
      'Fox对BitShares早期概念形成有巨大影响，是敏捷专家，在软件开发、项目管理等方面有丰富经验，同时在金融服务、抵押银行和制造等领域都有跨国经验。',
  },
  v8: {
    name: 'Vadim Andryan',
    position: 'Crypviser GmbH公司CEO',
    intro:
      'Vadim身兼多种角色，企业家、投资人、顾问、网络安全专家和土木工程专家。Vadim在计算机安全和数据加密领域有丰富的经验。他在政府和军队项目中负责网络安全和社会工程部分。',
  },
  v9: {
    name: 'Annemieke Dirkes',
    position: '比特股区块链全球发言人',
    intro:
      '企业家，投资人，从1987年开始进入IT行业。熟悉多国语言，给跨国公司做过咨询。现作为社区选举的比特股区块链基金会的发言人，致力于处理监管，市场以及法务相关的事务。',
  },
  v10: {
    name: 'Christopher Hering',
    position: 'Payger创始人',
    intro:
      '区块链技术爱好者，致力于辅导公司和企业家结合石墨烯区块链技术改进现有业务。Payger是领先的数字货币支付平台，支持多币种的储存、转账和交易，为企业和个人提供全球支付解决方案。',
  },
  v11: {
    name: 'Jonathan Bahai',
    position: 'Peerplays 创始人',
    intro: 'Peerplays是全球首个基于分布式区块链技术的电子竞技比赛和投注平台。',
  },
  v12: {
    name: 'George Goognin',
    position: 'Karma创始人',
    intro:
      '俄罗斯议会区块链专家议会的副会长，经济数学模型专业博士，2002年开始IT生涯。Karma 是一个区块链P2P借贷平台，公司或个人之间可以直接进行交易。',
  },
  v13: {
    name: 'Alex Shkor',
    position: 'Scorum CTO',
    intro:
      'Alex有多年软件开发及架构师经验，曾担任Paralect的CTO和区块链架构师，目前仍担任PlayHall Inc.和Hero.org的区块链架构顾问等。',
  },
  v14: {
    name: '马宝春',
    position: '善林区块链μMatrix项目创始人',
    intro:
      '浙江大学应用电子本科，复旦大学微电子硕士。曾就职于GE，台达电子等世界知名企业，长期从事各类电子产品的研发到量产工作，并参与多个高端智能硬件初创公司的建立与开拓 。具有15年硬件设计、生产相关经验，20年应用密码学实战经验。万向创新聚能城全球区块链挑战赛智能终端类第二名。',
  },
  v15: {
    name: '罗谊',
    position: '区块链技术研究者，区块链开发团队负责人',
    intro:
      '2013年接触区块链和比特股，去中心化预测平台-自平台的开发者。以太坊企业联盟成员信砥信息科技联盟链StoneLedger团队负责人。',
  },
  v16: {
    name: '张增波',
    position: '鼓鼓钱包CTO',
    intro: '北京航空航天大学工程硕士，15年软件开发经验。',
  },
  v17: {
    name: '向念',
    position: 'YOYOW CTO',
    intro:
      '某 IT 企业前技术主管，熟悉石墨烯 (Graphene) 前端架构及 IPFS 星际文件系统，独立开发了带交易功能的 BitShares 手机钱包。前后端架构设计及开发主管。',
  },
  v18: {
    name: '陈彦丰',
    position: '目前任Cybex核心团队成员，加密资产托管服务商拓链科技CEO',
    intro:
      '毕业于上海交通大学电子工程系，曾任美国国家仪器大区经理，聚星仪器创始股东。',
  },

  v19: {
    name: '奚海峰',
    position: '边界智能联合创始人',
    intro:
      '奚海峰是一位资深技术专家和企业家。自2009年从美国返回中国以来，他曾以首席技术官的身份为三家公司工作，其中之一为纳斯达克上市企业。在上海联合创办两家初创企业，担任技术和工程领导者角色。拥有马里兰大学的电气及计算机工程硕士学位和清华大学的自动控制硕士和学士学位。',
  },
  v20: {
    name: '廖洋阳',
    position: 'EOS引力区创始人',
    intro:
      '毕业于复旦大学计算机系，复旦大学计算机硕士，区块链资深布道者、西部矿机创始人、秋千交易所﻿创始人、莱特币资深人士，著名莱特币技术分析及行业领袖，2014年“莱特币不会死”的发起者，EOS引力区的主编和创始人。',
  },
  v21: {
    name: '白菜',
    position: 'Hellobts 创始人'
  },
  v22: {
    name: '赵聆言',
    position: '未来版权项目创始人，链娱科技CEO'
  }
}

export default cnlist
