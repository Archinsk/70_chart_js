<template>
  <div>
    <h3>Doughnut Chart</h3>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Базовые данные чарта</h4>
      <div>
        <pre>
<code>chart.config: {
  type: "bar",
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
      <div class="chart-container"><canvas id="barChart1"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  /* Тип диаграммы "Пончик" */
  <mark>type: "bar",</mark>
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Цвет</h4>
      <div class="chart-container"><canvas id="barChart2"></canvas></div>
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
      <h4>Границы</h4>
      <div class="chart-container"><canvas id="barChart3"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  data: {
    datasets: [
        /* Цвет контура столбцов (По умолчанию - голубой встроенный) */
        /* Установка цвета без цвета столбцов сбрасывает цвет сегментов до светло-серого */
        <mark>borderColor: "dimGray",</mark>
        /* Ширина контура столбцов (По умолчанию - '0px') */
        <mark>borderWidth: 4,</mark>
        /* Радиус скругления углов контура */
        /* Может быть передан объект со свойствами 4-х углов */
        <mark>borderRadius: 10,</mark>
        /* Скрытие сторон контура */
        /* Значения: "start"(default) | "end" | "middle"(для многослойных столбцов) | "bottom" | "left" | "top" | "right" | false | true */
        <mark>borderSkipped: "left",</mark>
      },
    ],
  },
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Эффекты при наведении</h4>
      <div class="chart-container"><canvas id="barChart4"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  data: {
    datasets: [
      {
        /* Цвета и контур сегмента при наведении */
        <mark>hoverBackgroundColor: "gold",</mark>
        <mark>hoverBorderColor: "orangeRed",</mark>
        <mark>hoverBorderWidth: 6,</mark>
        <mark>hoverBorderRadius: 10,</mark>
      },
    ]
  }
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Общие параметры</h4>
      <div class="chart-container"><canvas id="barChart5"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  data: {
    datasets: [
      {
        /* "Нулевое" значение (по умолчанию - 0) */
        <mark>base: 10,</mark>
        /* Относительная ширина столбца (значения от 0 до 1) */
        <mark>barPercentage: 0.8,</mark>
        /* Расширение/подрезка столбцов относительно фона чарта */
        <mark>clip: -20,</mark>
        /* Ориентация ("x"(по умолчанию) - вертикальные столбцы), "y" - горизонтальные столбцы */
        <mark>indexAxis: "y",</mark>
        /* Подпись шкалы, добавляется и в tooltip */
        <mark>label: "Mobile Browser Rating",</mark>
      },
    ]
  }
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Относительное положение</h4>
      <div class="chart-container"><canvas id="barChart6"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  data: {
    datasets: [
      {
        /* Ширина столбца в пикселях */
        <mark>barThickness: 45,</mark>
        /* Расположить столбцы рядом (true - по умолчанию) или один поверх другого, соосно (false) */
        <mark>grouped: false,</mark>
        /* Искуственное наращивание высоты столбца до минимального значения (в пикселях) */
        <mark>minBarLength: 10,</mark>
      },
    ]
  }
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Сгруппированные столбцы</h4>
      <div class="chart-container"><canvas id="barChart7"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  data: {
    datasets: [
      {
        /* Порядок расположения столбцов. Чем меньше число, тем ближе столбец к началу координат (по умолчанию - 0) */
        <mark>order: 3,</mark>
        /* Увеличение ширины столбцов с возможным наложением. */
        /* Размер в пикселях. Значение по умолчанию - "auto" */
        <mark>inflateAmount: 5,</mark>
      },
    ]
  }
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Колоды (стек)</h4>
      <div class="chart-container"><canvas id="barChart8"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  data: {
    datasets: [
      {
        /* Идентификатор колоды. Если у двух и более массивов данных указан одинаковый идентификатор, то столбцы будут составлять колоду */
        <mark>stack: "mobileAndDesktop",</mark>
        /* Идентификатор осей (в одном чарте совмещаются две или более системы координат с разными идентификаторами, добавляются дополнительные шкалы) */
        // <mark>xAxisID: "Rating",</mark>
        <mark>yAxisID: "Brand",</mark>
      },
    ]
  }
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Без параметров</h4>
      <div class="chart-container"><canvas id="barChart9"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  /*  */
  <mark></mark>
},</code></pre>
      </div>
    </div>
    <div class="display-flex flex-direction-column align-items-start">
      <h4>Без параметров</h4>
      <div class="chart-container"><canvas id="barChart10"></canvas></div>
      <div>
        <pre>
<code>chart.config: {
  /*  */
  <mark></mark>
},</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "BarView",
  data() {
    return {
      barChart1: {
        config: {
          type: "bar",
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
      barChart2: {
        config: {
          type: "bar",
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
      barChart3: {
        config: {
          type: "bar",
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
                borderRadius: 10,
                borderSkipped: "left",
              },
            ],
          },
        },
      },
      barChart4: {
        config: {
          type: "bar",
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
                hoverBorderWidth: 6,
                hoverBorderRadius: 10,
              },
            ],
          },
        },
      },
      barChart5: {
        config: {
          type: "bar",
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
                base: 10,
                barPercentage: 0.8,
                clip: -20,
                indexAxis: "y",
                label: "Mobile Browser Rating",
                xAxisID: "Rating",
                yAxisID: "Brand",
              },
            ],
          },
        },
      },
      barChart6: {
        config: {
          type: "bar",
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
                label: "Mobile",
                data: [64.5, 25, 0, 0, 4.5, 2, 1.5, 0.5, 0, 2],
                barThickness: 15,
                // grouped: false,
                minBarLength: 10,
                order: 2,
                // barPercentage: 1,
                // inflateAmount: 5,
                // categoryPercentage: 0.5,
                // skipNull: true,
              },
              {
                label: "Desktop",
                data: [66, 11, 11, 6.5, 0, 3, 0, 0, 0.5, 2],
                barThickness: 45,
                // grouped: false,
                minBarLength: 10,
                order: 3,
                // barPercentage: 1,
                // inflateAmount: 5,
                // inflateAmount: 1,
                // categoryPercentage: 0.5,
                // skipNull: true,
              },
            ],
          },
        },
      },
      barChart7: {
        config: {
          type: "bar",
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
                label: "Mobile",
                data: [64.5, 25, 0, 0, 4.5, 2, 1.5, 0.5, 0, 2],
                order: 2,
                pointStyle: "circle",
                // barPercentage: 1,
                inflateAmount: 5,
                // categoryPercentage: 0.5,
                // skipNull: false,
              },
              {
                label: "Desktop",
                data: [66, 11, 11, 6.5, 0, 3, 0, 0, 0.5, 2],
                order: 1,
                pointStyle: "circle",
                // barPercentage: 1,
                inflateAmount: 5,
                // inflateAmount: 1,
                // categoryPercentage: 0.5,
                // skipNull: false,
              },
            ],
          },
        },
      },
      barChart8: {
        config: {
          type: "bar",
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
                label: "Mobile",
                data: [64.5, 25, 0, 0, 4.5, 2, 1.5, 0.5, 0, 2],
                // xAxisID: "Rating",
                yAxisID: "mobileBrand",
              },
              {
                label: "Desktop",
                data: [20, 20, 15, 15, 0, 15, 0, 0, 5, 10],
                // xAxisID: "Rating",
                yAxisID: "desktopBrand",
              },
            ],
          },
        },
      },
      barChart9: {
        config: {
          type: "bar",
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
      barChart10: {
        config: {
          type: "bar",
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
    };
  },
  mounted() {
    new Chart(document.getElementById("barChart1"), this.barChart1.config);
    new Chart(document.getElementById("barChart2"), this.barChart2.config);
    new Chart(document.getElementById("barChart3"), this.barChart3.config);
    new Chart(document.getElementById("barChart4"), this.barChart4.config);
    new Chart(document.getElementById("barChart5"), this.barChart5.config);
    new Chart(document.getElementById("barChart6"), this.barChart6.config);
    new Chart(document.getElementById("barChart7"), this.barChart7.config);
    new Chart(document.getElementById("barChart8"), this.barChart8.config);
    new Chart(document.getElementById("barChart9"), this.barChart8.config);
    new Chart(document.getElementById("barChart10"), this.barChart8.config);
    // Осталось
    //   categoryPercentage
    //   maxBarThickness
    //   pointStyle
    //   skipNull
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
  width: 800px;
}
pre {
  background-color: lightgrey;
  color: grey;
  padding: 0.5rem;
  border: 3px grey solid;
  border-radius: 0.5rem;
}
</style>
