<template>
  <section>
    <div class="container calculater">
      <div class="row align-items-center">
        <div class="col-md-6 ms-md-auto fullbodyCaculator">

          
    

          


          <p class="display2">
            {{ num1 }} {{ operate }} {{ num2 }} {{ operate_equal }}
          </p>


          <div class="outsidedisplay">
            <input type="text" class="display text-center" v-model="current" />
            <div @click="ShowBoleanhistory()" class="btn btnCalculateoperate btnshowingHisotry">history</div>
          </div>




          <div class="card list-group historylist" v-show="showbolean">
            <ul class="list-group text-start">
              <li class="list-group-item lihistorylist" v-for="(hist, index) in history" :key="index">
                {{ hist }}
              </li>
            </ul>
          </div>

          <div class="fullbodyCalculatoerbottom" v-if="boleanshowingif">
          <div @click="clear_paragraph" class="btn btnCalculateoperate">C</div>
          <div @click="clear" class="btn btnCalculateoperate">CE</div>
          <div @click="ShowBoleanhistory()" class="btn btnCalculateoperate">history</div>
          <div @click="del" class="btn btnCalculateoperate del">Del</div>
          <div @click="percent" class="btn btnCalculateoperate">%</div>
          <div class="btn btnCalculateoperate">/x</div>
          <div @click="Squerd()" class="btn btnCalculateoperate">x^2</div>

          <div @click="calculate('/')" class="btn btnCalculateoperate">/</div>
          <div @click="append('7')" class="btn grid-item">7</div>
          <div @click="append('8')" class="btn grid-item">8</div>
          <div @click="append('9')" class="btn grid-item">9</div>

          <div @click="calculate('*')" class="btn btnCalculateoperate">x</div>
          <div @click="append('4')" class="btn grid-item">4</div>
          <div @click="append('5')" class="btn grid-item">5</div>
          <div @click="append('6')" class="btn grid-item">6</div>

          <div @click="calculate('-')" class="btn btnCalculateoperate">-</div>
          <div @click="append('1')" class="btn grid-item">1</div>
          <div @click="append('2')" class="btn grid-item">2</div>
          <div @click="append('3')" class="btn grid-item">3</div>

          <div @click="calculate('+')" class="btn btnCalculateoperate">+</div>
          <div @click="minusplus()" class="btn grid-item">+/-</div>
          <div @click="append('0')" class="btn grid-item">0</div>
          <div @click="dot()" class="btn grid-item">.</div>
          <div @click="equal()" class="btn btnCalculateoperate">=</div>
        </div>
        </div>
        <div class="col-md-6 mt-sm-3 mt-md-0">

        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      current: "",
      num1: "",
      num2: "",
      boll: false,
      oprationfired: false,
      operation: "",
      history: [],
      name: "",
      operate: "",
      before_equal: "",
      equalfired: false,
      operate_equal: "",
      showbolean :false,
      boleanshowingif : true,
    };
  },
  methods: {
    append(x) {
      if (this.equalfired) {
        this.clear();
        this.clear_paragraph();
        this.operate_equal = "";
        this.equalfired = false;
      }
      if (this.oprationfired) {
        this.current = "";
      }
      this.current = `${this.current}${x}`;
      this.oprationfired = false;
    },
    clear() {
      this.current = "";
    },
    del() {
      this.current = this.current.slice(0, this.current.length - 1);
    },
    percent() {
      this.current = this.current / 100;
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.current = `${this.current}${"."}`;
      }
    },
    minusplus() {
      this.current =
        this.current[0] === "-" ? this.current.slice(1) : -`${this.current}`;
    },

    Squerd() {
      this.current = parseFloat(this.current) * parseFloat(this.current);
    },
    equal() {
      this.operate_equal = "=";
      if (this.equalfired) {
        if (this.num2 != "") {
          this.num1 = this.current;
        }
      } else {
        if (this.num1 != "") {
          this.num2 = this.current;
        }
        if (this.num2 == "") {
          this.num2 = this.current;
        }
      }

      this.before_equal = this.num1 + this.operate + this.num2 + " " + this.operate_equal;

      this.oprationfired = true;
      this.equalfired = true;

      if (this.before_equal.indexOf("*") != -1) {
        this.current = parseFloat(this.num1) * parseFloat(this.num2);
      } else if (this.before_equal.indexOf("/") != -1) {
        this.current = parseFloat(this.num1) / parseFloat(this.num2);
      } else if (this.before_equal.indexOf("+") != -1) {
        this.current = parseFloat(this.num1) + parseFloat(this.num2);
      } else if (this.before_equal.indexOf("-") != -1) {
        this.current = parseFloat(this.num1) - parseFloat(this.num2);
      }
      this.before_equal = this.num1 + this.operate + this.num2 + " " + this.operate_equal + " " + this.current;
      this.history.push(this.before_equal);
    },
    clearHistory() {
      this.history = [];
    },
    calculate(operation) {
      switch (operation) {
        case "+":
          this.operate_equal = "";
          if (this.equalfired == true) {
            this.num1 = this.current;
            this.operate = "+";
            this.num2 = "";
            this.equalfired = false;
          } else {
            if (this.num1 != "") {
              this.num2 = this.current;
              this.operate = "+";
              this.oprationfired = true;
            } else {
              this.num1 = this.current;
              this.operate = "+";
              this.oprationfired = true;
            }
          }
          break;

        case "-":
          this.operate_equal = "";
          if (this.equalfired == true) {
            this.num1 = this.current;
            this.operate = "-";
            this.num2 = "";
            this.equalfired = false;
          } else {
            if (this.num1 != "") {
              this.num2 = this.current;
              this.operate = "-";
              this.oprationfired = true;
            } else {
              this.num1 = this.current;
              this.operate = "-";
              this.oprationfired = true;
            }
          }
          break;

        case "*":
          this.operate_equal = "";
          if (this.equalfired == true) {
            this.num1 = this.current;
            this.operate = "*";
            this.num2 = "";
            this.equalfired = false;
          } else {
            if (this.num1 != "") {
              this.num2 = this.current;
              this.operate = "*";
              this.oprationfired = true;
            } else {
              this.num1 = this.current;
              this.operate = "*";
              this.oprationfired = true;
            }
          }
          break;

        case "/":
          this.operate_equal = "";
          if (this.equalfired == true) {
            this.num1 = this.current;
            this.operate = "/";
            this.num2 = "";
            this.equalfired = false;
          } else {
            if (this.num1 != "") {
              this.num2 = this.current;
              this.operate = "/";
              this.oprationfired = true;
            } else {
              this.num1 = this.current;
              this.operate = "/";
              this.oprationfired = true;
            }
          }
          break;
      }
    },
    clear_paragraph() {
      this.num1 = "";
      this.operate = "";
      this.num2 = "";
      this.operate_equal = "";
    },
    ShowBoleanhistory(){
      this.showbolean = !this.showbolean;
      this.boleanshowingif = !this.boleanshowingif
    }
  },
};
</script>


<style scoped>
.display {
  grid-column: 1/6;
  background-color: rgb(66, 63, 63);
  color: white;
  padding: 1rem;
  border-top: none;
}
.outsidedisplay{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.display2 {
  grid-column: 1/5;
  background-color: rgb(66, 63, 63);
  color: white;
  margin-bottom: 0;
  border: none;
  padding: 15px;
  font-size: 12px;
  color: rgb(205, 205, 205);
  min-height: 50px;
  text-align: right;
}
.fullbodyCalculatoerbottom{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.grid-item {
  padding: 10px;
  color: white;
  background-color: black;
  border: 2px solid rgb(43, 42, 42);
  border-radius: 0;
}
.btnCalculateoperate {
  padding: 10px;
  color: white;
  background-color: rgb(66, 63, 63);
  border: 2px solid black;
  border-radius: 0;
}
.historylist {
  overflow: auto;
  height: 20rem;
  background-color: rgb(66, 63, 63);
  color: white;
  border-bottom: 1px solid white;


}
.lihistorylist{
  background-color: rgb(66, 63, 63);
  color: white;
  border-bottom: 1px solid white;
  }
  .btnshowingHisotry{
    grid-column: 1/6;
  }

</style>