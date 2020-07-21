import {LineBreakMode} from '@/common/js/const'

/**
 * DateStr 时间戳转字符串格式
 * @param date
 */
export function socialDateFormat (date) {
  // 获取js时间戳
  var time = new Date().getTime()
  // 去掉js时间戳后三位
  time = parseInt((time - date) / 1000)
  // 存储转换值
  var s
  // 十分钟内
  if (time < 60 * 10) {
    return '刚刚'
  } else if ((time < 60 * 60) && (time > 60 * 10)) {
    // 超过十分钟少于一小时
    s = Math.floor(time / 60)
    return s + '分钟前'
  } else if ((time < 60 * 60 * 24) && (time >= 60 * 60)) {
    // 超过一小时少于二十四小时
    s = Math.floor(time / 60 / 60 / 24)
    return s + '天前'
  } else {
    // 超过三天
    date = new Date(parseInt(date))
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  }
}

/**
 * 映射tag颜色
 * @param index
 */
export function mapTagColor (index) {
  switch (index % 4) {
    case 0:
      return 'blue'
    case 1:
      return 'green'
    case 2:
      return 'red'
    case 3:
      return 'yellow'
  }
}

/**
 * 树形数据转换
 */
export function treeDataTranslate (data, id = 'id', pid = 'parentId') {
  var res = []
  var temp = {}
  for (var i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i]
  }
  for (var k = 0; k < data.length; k++) {
    if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
      if (!temp[data[k][pid]]['children']) {
        temp[data[k][pid]]['children'] = []
      }
      if (!temp[data[k][pid]]['_level']) {
        temp[data[k][pid]]['_level'] = 1
      }
      data[k]['_level'] = temp[data[k][pid]]._level + 1
      temp[data[k][pid]]['children'].push(data[k])
    } else {
      res.push(data[k])
    }
  }
  return res
}

export const mixin = {
  filters: {
    // 用于映射的标签颜色
    mapTagColor: function (index) {
      return mapTagColor(index)
    },
    socialDate: function (formatedDate) {
      return socialDateFormat(formatedDate)
    },
    // 去除html标签
    filterHtml: function (richText) {
      return richText.replace(/<.+?>/g, '')
    },
    // 用于处理行尾省略号的过滤器
    textLineBreak: function (text, maxLength, lineBreakMode) {
      if (text === undefined || text === null || text.length === 0) {
        return ''
      }
      if (lineBreakMode === null || lineBreakMode === undefined) {
        lineBreakMode = LineBreakMode.EllipsisTruncatingTail
      }
      switch (lineBreakMode) {
        case LineBreakMode.WrappingTruncatingTail:
          return text.substr(0, maxLength)
        case LineBreakMode.WrappingTruncatingHead:
          return text.substr(-maxLength)
        case lineBreakMode.EllipsisTruncatingTail:
          return text.substr(0, maxLength) + (text.length > maxLength ? '...' : '')
        case LineBreakMode.EllipsisTruncatingMiddle:
          let resultText = text.substr(0, maxLength)
          if (text.length > maxLength) {
            return resultText.substr(0, parseInt(maxLength / 2)) + '...' + resultText.substr(parseInt(maxLength / 2))
          }
          return resultText
        case LineBreakMode.EllipsisTruncatingHead:
          return (text.length > maxLength ? '...' : '') + text.substr(-maxLength)
      }
      return text
    }
  }
}
