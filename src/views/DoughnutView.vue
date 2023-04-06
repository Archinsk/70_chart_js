<template>
  <div>
    <h3>Doughnut Chart</h3>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Базовые данные чарта</h4>
      <div>
        <pre>
<code>chart.config: {
  type: "doughnut",
  data: {
    /* Базовый массив ярыков */
    <mark>labels: [ "Chrome", "Safari", "Samsung Internet", "Opera", "UC Browser", "Android", ]</mark>,
    datasets: [
      {
        /* Базовый числовой массив значений */
        <mark>data: [65, 25, 5, 3, 1, 1]</mark>,
      },
    ],
  },
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Без параметров</h4>
      <div class="chart-container"><canvas id="doughnutChart1"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  /* Тип диаграммы "Пончик" */
  <mark>type: "doughnut",</mark>
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Цвет</h4>
      <div class="chart-container"><canvas id="doughnutChart2"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  data: {
    datasets: [
      {
        /* Массив цветов (по умолчанию втроенная цветовая палитра) */
        <mark>backgroundColor: ["#6090C0", "#6060C0", "#9060C0", "#C06060", "#C08F60", "#C0BE60",],</mark>
      },
    ],
  }
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Углы</h4>
      <div class="chart-container"><canvas id="doughnutChart3"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  data: {
    datasets: [
      {
        /* Количество градусов, соответствующих 100% */
        <mark>circumference: 270,</mark>
        /* Положение точки отсчета в градусах от верха по часовой стрелке */
        <mark>rotation: 90,</mark>
      },
    ],
  },
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Границы</h4>
      <div class="chart-container"><canvas id="doughnutChart4"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  data: {
    datasets: [
        /* Цвет контура сегментов (По умолчанию - '#fff') */
        /* Установка цвета без цвета сегментов сбрасывает цвет сегментов до светло-серого */
        <mark>borderColor: "dimGray",</mark>
        /* Ширина контура сегментов (По умолчанию - '2px') */
        <mark>borderWidth: 4,</mark>
        /* Стиль отрисовки контура (центр линии по краю сегмента - 'center' или край линии по краю сегмента - 'inner') */
        /* По умолчанию - 'center' */
        <mark>borderAlign: "inner",</mark>
        /* Стиль внешних углов при вопряжении линий (по умолчанию - 'miter') */
        /* 'round' - скругленный, 'bevel' - срезанный, 'miter' - острый */
        <mark>borderJoinStyle: "bevel",</mark>
        /* Радиус скругления углов контура */
        /* Может быть передан объект со свойствами 4-х углов */
        <mark>borderRadius: 10,</mark>
      },
    ],
  },
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Эффекты при наведении</h4>
      <div class="chart-container"><canvas id="doughnutChart5"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  data: {
    datasets: [
      {
        /* Цвета и контур сегмента при наведении */
        <mark>hoverBackgroundColor: "gold",</mark>
        <mark>hoverBorderColor: "orangeRed",</mark>
        <mark>hoverBorderJoinStyle: "round",</mark>
        <mark>hoverBorderWidth: 6,</mark>
        /* Смещение сегмента от центра при наведении */
        <mark>hoverOffset: 30,</mark>
      },
    ]
  }
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Прочее</h4>
      <div class="chart-container"><canvas id="doughnutChart6"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  data: {
    datasets: [
      {
        borderWidth: 0,
        /* Подрезка и расширение кадра под чарт */
        /* Отрицательное значение - подрезка */
        /* Может передан объект со свойством для каждой стороны */
        <mark>clip: -10,</mark>
        /* Смещение сегментов от центра без изменения радиуса */
        <mark>// offset: 10,</mark>
        /* Смещение сегментов от центра с изменением радиуса и появлением просветов */
        /* Может быть массивом числовых значений */
        <mark>spacing: 50,</mark>
        /* Часть ширины бублика от общей ширины всех бубликов (для многослойного чарта) */
        <mark>weight: 10,</mark>
      },
    ]
  }
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Общие настройки</h4>
      <div class="chart-container"><canvas id="doughnutChart7"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  options: {
    /* Размер отверстия (строка с '%' в конце - процент от общего радиуса)*/
    /* (число - внутренний радиус в пикселях) */
    /* (по умолчанию - '50%') */
    <mark>cutout: "75%",</mark>
    /* Размер внешнего радиуса (строка с '%' в конце - процент от начального размера) */
    /* (число - внешний радиус в пикселях) */
    /* (по умолчанию - '100%') */
    <mark>// radius: "50%",</mark>
    animation: {
      /* Тип анимации (могут использоваться совместно) */
      <mark>animateRotate: false,</mark>
      <mark>animateScale: true,</mark>
    },
  },
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Пример использования</h4>
      <div class="chart-container"><canvas id="doughnutChart8"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  type: "doughnut",
  options: {
    cutout: "34%",
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  },
  data: {
    labels: ["Chrome", "Safari", "Edge", "Firefox", "Samsung Internet", "Opera", "UC Browser", "Android", "Internet Explorer", "Others"],
      datasets: [
        {
          data: [66, 11, 11, 6.5, 0, 3, 0, 0, 0.5, 2],
          backgroundColor: ["#E1EEF4", "#E1E5F4", "#E1F4F0", "#F0E1F4", "#E7E1F4", "#F4E1E5", "#F4E6E1", "#E4F4E0", #E1F4E7", "#F0F0F0"],
          weight: 10,
        },
        {
          data: [64.5, 25, 0, 0, 4.5, 2, 1.5, 0.5, 0, 2],
          backgroundColor: ["#6090C0", "#6060C0", "#60C0C0", "#C060C0", "#9060C0", "#C06062", #C08F60", #60C060", #60C090", #ACACAC"],
          weight: 20,
        },
      ],
    },
  },
},</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "DoughnutView",
  data() {
    return {
      doughnutChart1: {
        config: {
          type: "doughnut",
          data: {
            labels: [
              "Chrome",
              "Safari",
              "Samsung Internet",
              "Opera",
              "UC Browser",
              "Android",
            ],
            datasets: [
              {
                data: [65, 25, 5, 3, 1, 1],
              },
            ],
          },
        },
      },
      doughnutChart2: {
        config: {
          type: "doughnut",
          data: {
            labels: [
              "Chrome",
              "Safari",
              "Samsung Internet",
              "Opera",
              "UC Browser",
              "Android",
            ],
            datasets: [
              {
                data: [65, 25, 5, 3, 1, 1],
                backgroundColor: [
                  "#6090C0",
                  "#6060C0",
                  "#9060C0",
                  "#C06060",
                  "#C08F60",
                  "#C0BE60",
                ],
              },
            ],
          },
        },
      },
      doughnutChart3: {
        config: {
          type: "doughnut",
          data: {
            labels: [
              "Chrome",
              "Safari",
              "Samsung Internet",
              "Opera",
              "UC Browser",
              "Android",
            ],
            datasets: [
              {
                data: [65, 25, 5, 3, 1, 1],
                circumference: 270,
                rotation: 90,
              },
            ],
          },
        },
      },
      doughnutChart4: {
        config: {
          type: "doughnut",
          options: {},
          data: {
            labels: [
              "Chrome",
              "Safari",
              "Samsung Internet",
              "Opera",
              "UC Browser",
              "Android",
            ],
            datasets: [
              {
                data: [65, 25, 5, 3, 1, 1],
                borderColor: "dimGray",
                borderWidth: 4,
                borderAlign: "inner",
                borderJoinStyle: "bevel",
                borderRadius: 10,
              },
            ],
          },
        },
      },
      doughnutChart5: {
        config: {
          type: "doughnut",
          data: {
            labels: [
              "Chrome",
              "Safari",
              "Samsung Internet",
              "Opera",
              "UC Browser",
              "Android",
            ],
            datasets: [
              {
                data: [65, 25, 5, 3, 1, 1],
                hoverBackgroundColor: "gold",
                hoverBorderColor: "orangeRed",
                hoverBorderJoinStyle: "round",
                hoverBorderWidth: 6,
                hoverOffset: 30,
              },
            ],
          },
        },
      },
      doughnutChart6: {
        config: {
          type: "doughnut",
          data: {
            labels: [
              "Chrome",
              "Safari",
              "Samsung Internet",
              "Opera",
              "UC Browser",
              "Android",
            ],
            datasets: [
              {
                data: [65, 25, 5, 3, 1, 1],
                borderWidth: 0,
                clip: -10,
                // offset: 50,
                spacing: 50,
                weight: 10,
              },
              {
                data: [55, 20, 10, 10, 3, 2],
                borderWidth: 0,
                weight: 20,
              },
            ],
          },
        },
      },
      doughnutChart7: {
        config: {
          type: "doughnut",
          options: {
            cutout: "75%",
            // radius: "50%",
            animation: {
              animateRotate: false,
              animateScale: true,
            },
          },
          data: {
            labels: [
              "Chrome",
              "Safari",
              "Samsung Internet",
              "Opera",
              "UC Browser",
              "Android",
            ],
            datasets: [
              {
                data: [65, 25, 5, 3, 1, 1],
              },
            ],
          },
        },
      },
      doughnutChart8: {
        config: {
          type: "doughnut",
          options: {
            cutout: "34%",
            animation: {
              animateRotate: true,
              animateScale: true,
            },
          },
          data: {
            labels: [
              "Chrome",
              "Safari",
              "Edge",
              "Firefox",
              "Samsung Internet",
              "Opera",
              "UC Browser",
              "Android",
              "Internet Explorer",
              "Others",
            ],
            datasets: [
              {
                data: [66, 11, 11, 6.5, 0, 3, 0, 0, 0.5, 2],
                backgroundColor: [
                  "#E1EEF4",
                  "#E1E5F4",
                  "#E1F4F0",
                  "#F0E1F4",
                  "#E7E1F4",
                  "#F4E1E5",
                  "#F4E6E1",
                  "#E4F4E0",
                  "#E1F4E7",
                  "#F0F0F0",
                ],
                weight: 10,
              },
              {
                data: [64.5, 25, 0, 0, 4.5, 2, 1.5, 0.5, 0, 2],
                backgroundColor: [
                  "#6090C0",
                  "#6060C0",
                  "#60C0C0",
                  "#C060C0",
                  "#9060C0",
                  "#C06062",
                  "#C08F60",
                  "#60C060",
                  "#60C090",
                  "#ACACAC",
                ],
                weight: 20,
              },
            ],
          },
        },
      },
      doughnutChart: {
        config: {
          type: "doughnut",
          options: {
            animation: false,
            plugins: {
              legend: {
                display: true,
                position: "right",
                align: "center",
                maxHeight: 300,
                maxWidth: 300,
                // fullSize: true,
                // onClick: null,
                // onHover: null,
                // onLeave: null,
                reverse: false,
                labels: {
                  boxWidth: 10,
                  boxHeight: 10,
                  color: "green",
                  font: {
                    // family: "Impact",
                    size: "12",
                    // style: "italic",
                    weight: "italic",
                    // lineHeight: "2",
                  },
                  padding: 10,
                  // generateLabels: null,
                  // filter: null,
                  // sort: null,
                  pointStyle: "rectRounded",
                  textAlign: "left",
                  usePointStyle: true,
                  // pointStyleWidth: null,
                  useBorderRadius: true,
                  borderRadius: 5,
                },
                rtl: false,
                textDirection: "ltr",
                title: {
                  color: "red",
                  display: true,
                  font: {
                    family: "Impact",
                    size: "16",
                    // style: "italic",
                    weight: "bold",
                    // lineHeight: "2",
                  },
                  // padding: 10,
                  text: "Mobile Browsers",
                },
              },
              tooltip: {
                enabled: false,
              },
            },
          },
          data: {
            labels: [
              "Chrome",
              "Safari",
              "Samsung Internet",
              "Opera",
              "UC Browser",
              "Android",
            ],
            datasets: [
              {
                label: "My First Dataset",
                data: [64.67, 25.07, 4.49, 1.8, 1.53, 0.73],
                backgroundColor: [
                  "#6090C0",
                  "#6060C0",
                  "#9060C0",
                  "#C06062",
                  "#C08F60",
                  "#C0BE60",
                ],
                borderAlign:
                  "center" /* 'center'|'inner' (default - 'center') */,
                borderColor: "red" /* (default - '#fff') */,
                borderJoinStyle:
                  "round" /* 'round'|'bevel'|'miter' - сопряжение внешних углов контура */,
                borderRadius: 10,
                borderWidth: 5,
                circumference: 360,
                // clip: null,
                // hoverBackgroundColor: null,
                // hoverBorderColor: null,
                // hoverBorderJoinStyle: null,
                // hoverBorderWidth: null,
                // hoverOffset: 4,
                // offset: null,
                rotation: 90 /* Положение точки отсчета */,
                spacing: 10 /* ??? */,
                weight: 25 /* ??? */,
              },
            ],
          },
        },
      },
    };
  },
  mounted() {
    new Chart(
      document.getElementById("doughnutChart1"),
      this.doughnutChart1.config
    );
    new Chart(
      document.getElementById("doughnutChart2"),
      this.doughnutChart2.config
    );
    new Chart(
      document.getElementById("doughnutChart3"),
      this.doughnutChart3.config
    );
    new Chart(
      document.getElementById("doughnutChart4"),
      this.doughnutChart4.config
    );
    new Chart(
      document.getElementById("doughnutChart5"),
      this.doughnutChart5.config
    );
    new Chart(
      document.getElementById("doughnutChart6"),
      this.doughnutChart6.config
    );
    new Chart(
      document.getElementById("doughnutChart7"),
      this.doughnutChart7.config
    );
    new Chart(
      document.getElementById("doughnutChart8"),
      this.doughnutChart8.config
    );
  },
};
</script>

<style lang="scss" scoped>
.display-flex {
  display: flex;
}
.flex-direction-column {
  flex-direction: column;
}
.align-items-start {
  align-items: start;
}

.chart-container {
  width: 300px;
}
pre {
  background-color: lightgrey;
  color: grey;
  padding: 0.5rem;
  border: 3px grey solid;
  border-radius: 0.5rem;
}
</style>
