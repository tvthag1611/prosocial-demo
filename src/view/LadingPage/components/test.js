import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function Mem() {
  const [d19, setD19] = useState([
    {
      image:
        'https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-9/s960x960/85207775_1131793470494036_2810980134440402944_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=HbKRW3ADqBoAX-sA26M&_nc_ht=scontent.fhan5-1.fna&tp=7&oh=70b6ad8d43cee35662ddf5dc28387e41&oe=5F6B3CC4://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/s960x960/85207775_1131793470494036_2810980134440402944_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=XA_AlISQIdcAX-dX4u_&_nc_ht=scontent.fhan3-1.fna&_nc_tp=7&oh=5650d076e430d6d558bd068b9d889f4c&oe=5EC51FC4',
      name: 'Trần Văn Thắng',
    },
    {
      image:
        'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-0/p640x640/59719540_2334793863458558_5390567372505481216_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=-1oEfZLBeDYAX_V03Uq&_nc_ht=scontent.fhan3-3.fna&_nc_tp=6&oh=0e6c357face4eae22baf79e7bc117cca&oe=5EC25AA3',
      name: 'Nguyễn Thế Anh',
    },
    {
      image:
        'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/62067740_2383088618605081_8412783516210692096_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=mIowPTIiS-kAX-mq5QS&_nc_ht=scontent.fhan3-2.fna&oh=5b45af6b3d8a15f61f6c604a4c679f55&oe=5EC48BF5',
      name: 'Nguyễn Việt Hương',
    },
    {
      image:
        'https://scontent.fhan3-2.fna.fbcdn.net/v/t31.0-8/p960x960/17359037_1985626588331570_566222989922575259_o.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=6f5PqvqLyOcAX9YXZfs&_nc_ht=scontent.fhan3-2.fna&_nc_tp=6&oh=16780da9a162d16e215fad4760fa2de7&oe=5EC36320',
      name: 'Nguyễn Tiến Hải',
    },
    {
      image:
        'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/70484206_2370760386529881_5713510580581564416_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=SocytO7wD5MAX_oIZOR&_nc_ht=scontent.fhan3-2.fna&oh=f8d8b5b63bb4aa269d06290e89b77c7b&oe=5EC38C28',
      name: 'Trần Duy Công Khanh',
    },
  ])
  const [d18, setD18] = useState([
    {
      image:
        'https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-9/s960x960/85207775_1131793470494036_2810980134440402944_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=HbKRW3ADqBoAX-sA26M&_nc_ht=scontent.fhan5-1.fna&tp=7&oh=70b6ad8d43cee35662ddf5dc28387e41&oe=5F6B3CC4://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/s960x960/85207775_1131793470494036_2810980134440402944_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=XA_AlISQIdcAX-dX4u_&_nc_ht=scontent.fhan3-1.fna&_nc_tp=7&oh=5650d076e430d6d558bd068b9d889f4c&oe=5EC51FC4',
      name: 'Trần Văn Thắng',
    },
    {
      image:
        'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-0/p640x640/59719540_2334793863458558_5390567372505481216_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=-1oEfZLBeDYAX_V03Uq&_nc_ht=scontent.fhan3-3.fna&_nc_tp=6&oh=0e6c357face4eae22baf79e7bc117cca&oe=5EC25AA3',
      name: 'Nguyễn Thế Anh',
    },
    {
      image:
        'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/62067740_2383088618605081_8412783516210692096_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=mIowPTIiS-kAX-mq5QS&_nc_ht=scontent.fhan3-2.fna&oh=5b45af6b3d8a15f61f6c604a4c679f55&oe=5EC48BF5',
      name: 'Nguyễn Việt Hương',
    },
    {
      image:
        'https://scontent.fhan3-2.fna.fbcdn.net/v/t31.0-8/p960x960/17359037_1985626588331570_566222989922575259_o.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=6f5PqvqLyOcAX9YXZfs&_nc_ht=scontent.fhan3-2.fna&_nc_tp=6&oh=16780da9a162d16e215fad4760fa2de7&oe=5EC36320',
      name: 'Nguyễn Tiến Hải',
    },
    {
      image:
        'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/70484206_2370760386529881_5713510580581564416_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=SocytO7wD5MAX_oIZOR&_nc_ht=scontent.fhan3-2.fna&oh=f8d8b5b63bb4aa269d06290e89b77c7b&oe=5EC38C28',
      name: 'Trần Duy Công Khanh',
    },
  ])
  const [d17, setD17] = useState([
    {
      image:
        'https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-9/s960x960/85207775_1131793470494036_2810980134440402944_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=HbKRW3ADqBoAX-sA26M&_nc_ht=scontent.fhan5-1.fna&tp=7&oh=70b6ad8d43cee35662ddf5dc28387e41&oe=5F6B3CC4://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/s960x960/85207775_1131793470494036_2810980134440402944_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=XA_AlISQIdcAX-dX4u_&_nc_ht=scontent.fhan3-1.fna&_nc_tp=7&oh=5650d076e430d6d558bd068b9d889f4c&oe=5EC51FC4',
      name: 'Trần Văn Thắng',
    },
    {
      image:
        'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-0/p640x640/59719540_2334793863458558_5390567372505481216_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=-1oEfZLBeDYAX_V03Uq&_nc_ht=scontent.fhan3-3.fna&_nc_tp=6&oh=0e6c357face4eae22baf79e7bc117cca&oe=5EC25AA3',
      name: 'Nguyễn Thế Anh',
    },
    {
      image:
        'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/62067740_2383088618605081_8412783516210692096_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=mIowPTIiS-kAX-mq5QS&_nc_ht=scontent.fhan3-2.fna&oh=5b45af6b3d8a15f61f6c604a4c679f55&oe=5EC48BF5',
      name: 'Nguyễn Việt Hương',
    },
    {
      image:
        'https://scontent.fhan3-2.fna.fbcdn.net/v/t31.0-8/p960x960/17359037_1985626588331570_566222989922575259_o.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=6f5PqvqLyOcAX9YXZfs&_nc_ht=scontent.fhan3-2.fna&_nc_tp=6&oh=16780da9a162d16e215fad4760fa2de7&oe=5EC36320',
      name: 'Nguyễn Tiến Hải',
    },
    {
      image:
        'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/70484206_2370760386529881_5713510580581564416_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=SocytO7wD5MAX_oIZOR&_nc_ht=scontent.fhan3-2.fna&oh=f8d8b5b63bb4aa269d06290e89b77c7b&oe=5EC38C28',
      name: 'Trần Duy Công Khanh',
    },
  ])
  const [mem, setMem] = useState([
    [
      {
        image:
          'https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-9/s960x960/85207775_1131793470494036_2810980134440402944_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=HbKRW3ADqBoAX-sA26M&_nc_ht=scontent.fhan5-1.fna&tp=7&oh=70b6ad8d43cee35662ddf5dc28387e41&oe=5F6B3CC4://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/s960x960/85207775_1131793470494036_2810980134440402944_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=XA_AlISQIdcAX-dX4u_&_nc_ht=scontent.fhan3-1.fna&_nc_tp=7&oh=5650d076e430d6d558bd068b9d889f4c&oe=5EC51FC4',
        name: 'Trần Văn Thắng',
        khoa: 'D18',
      },
      {
        image:
          'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-0/p640x640/59719540_2334793863458558_5390567372505481216_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=-1oEfZLBeDYAX_V03Uq&_nc_ht=scontent.fhan3-3.fna&_nc_tp=6&oh=0e6c357face4eae22baf79e7bc117cca&oe=5EC25AA3',
        name: 'Nguyễn Thế Anh',
        khoa: 'D17',
      },
    ],

    [
      {
        image:
          'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/62067740_2383088618605081_8412783516210692096_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=mIowPTIiS-kAX-mq5QS&_nc_ht=scontent.fhan3-2.fna&oh=5b45af6b3d8a15f61f6c604a4c679f55&oe=5EC48BF5',
        name: 'Nguyễn Việt Hương',
        khoa: 'D18',
      },
      {
        image:
          'https://scontent.fhan3-2.fna.fbcdn.net/v/t31.0-8/p960x960/17359037_1985626588331570_566222989922575259_o.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=6f5PqvqLyOcAX9YXZfs&_nc_ht=scontent.fhan3-2.fna&_nc_tp=6&oh=16780da9a162d16e215fad4760fa2de7&oe=5EC36320',
        name: 'Nguyễn Tiến Hải',
        khoa: 'D17',
      },
    ],

    [
      {
        image:
          'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/70484206_2370760386529881_5713510580581564416_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=SocytO7wD5MAX_oIZOR&_nc_ht=scontent.fhan3-2.fna&oh=f8d8b5b63bb4aa269d06290e89b77c7b&oe=5EC38C28',
        name: 'Trần Duy Công Khanh',
        khoa: 'D17',
      },
    ],
  ])
  const [index, setIndex] = useState([
    {
      index1: 0,
      index2: 1,
      index3: 2,
    },
    {
      index1: 0,
      index2: 1,
      index3: 2,
    },
    {
      index1: 0,
      index2: 1,
      index3: 2,
    },
  ])

  var carouselInterval

  const startCarousel = () => {
    carouselInterval = setInterval(() => {
      toLeft(0)
      toLeft(1)
      toLeft(2)
    }, 4000)
  }

  useEffect(() => {
    startCarousel()
    return () => {
      clearInterval(carouselInterval)
    }
  })

  const toRight = (khoa) => {
    if (index[khoa].index1 === 0) {
      setIndex({
        index1: mem[khoa].length - 3,
        index2: mem[khoa].length - 2,
        index3: mem[khoa].length - 1,
      })
    } else {
      setIndex[khoa]({
        index1: index[khoa].index1 - 1,
        index2: index[khoa].index2 - 1,
        index3: index[khoa].index3 - 1,
      })
    }
  }
  const toLeft = (khoa) => {
    if (index[khoa].index3 === mem[khoa].length - 1) {
      setIndex[khoa]({
        index1: 0,
        index2: 1,
        index3: 2,
      })
    } else {
      setIndex({
        index1: index.index1 + 1,
        index2: index.index2 + 1,
        index3: index.index3 + 1,
      })
    }
  }

  return (
    <div className="get-mem">
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="control"
        onClick={toLeft(0)}
      />
      <div className="show-mem">
        <div
          className="ava-mem"
          style={{ backgroundImage: 'url(' + mem[index.index1].image + ')' }}
        ></div>
        <p className="name-mem">{mem[index.index1].name}</p>
        <p className="khoa-mem">{mem[index.index1].khoa}</p>
      </div>
      <div className="show-mem">
        <div
          className="ava-mem"
          style={{ backgroundImage: 'url(' + mem[index.index2].image + ')' }}
        ></div>
        <p className="name-mem">{mem[index.index2].name}</p>
        <p className="khoa-mem">{mem[index.index2].khoa}</p>
      </div>
      <div className="show-mem">
        <div
          className="ava-mem"
          style={{ backgroundImage: 'url(' + mem[index.index3].image + ')' }}
        ></div>
        <p className="name-mem">{mem[index.index3].name}</p>
        <p className="khoa-mem">{mem[index.index3].khoa}</p>
      </div>
      <FontAwesomeIcon
        icon={faAngleRight}
        className="control"
        onClick={toRight}
      />
    </div>
  )
}
