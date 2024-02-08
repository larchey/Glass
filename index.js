items = []
itemwidth = 0
itemheight = 0
cool = []
let bg, linec,inv,f1,f2,f3,f4
function setup() {
  createCanvas(windowWidth, windowWidth);
  if(fxrand()<.99){
    inv = false
  }else{
    inv = true
  }

  amount = Math.floor(map(fxrand(), 0, 1, 2, 10))
  spacingx = width / amount
  spacingy = width / amount
  minwidth = width / amount
  maxwidth = width - width / amount
  minheight = height / amount
  maxheight = height - height / amount
  linetype = fxrand()
  if (fxrand() < .5) {
    f4="color"
    bg = color(map(fxrand(), 0, 1, 200, 255), map(fxrand(), 0, 1, 200, 255), map(fxrand(), 0, 1, 200, 255), 255);
    linec = color(map(fxrand(), 0, 1, 200, 255), map(fxrand(), 0, 1, 200, 255), map(fxrand(), 0, 1, 200, 255), 200);
  } else {
    f4="white"
    bg = color(255);
    linec = color(map(fxrand(), 0, 1, 200, 240), map(fxrand(), 0, 1, 200, 240), map(fxrand(), 0, 1, 200, 240), 240);

  }
  if(inv){
    f4 = "black"
   bg = 0
  }

  background(bg)

  if (fxrand() < .5) {
    divmod = 4//Math.floor(map(fxrand(), 0, 1, 1, 10))//4
    divmod2 = 2//map(fxrand(), 0, 1, 1, 5);//2
  } else {
    divmod = Math.floor(map(fxrand(), 0, 1, 1, 10))//4
    divmod2 = map(fxrand(), 0, 1, 1, 5);//2
  }

  itemwidth = spacingx///map(fxrand(), 0, 1, .2, 2);
  itemheight = itemheight//spacingy

  al = map(fxrand(), 0, 1, 75, 150);

  shade = fxrand()

  colrs = fxrand()
  if(colrs<.33){
    f1 = "same"
  }else if(colrs<.66){
    f1 = "grid"
  }else{
    f1 = "random"
  }
  if (colrs < .33) {
    for (z = 0; z < 10; z++) {
      if (shade < .25) {
        m1 = map(fxrand(), 0, 1, 50, 75);
        m2 = map(fxrand(), 0, 1, 100, 125);
        //darkish
      }
      else if (shade < .5) {
        //prysm
        m1 = map(fxrand(), 0, 1, 100, 125);
        m2 = map(fxrand(), 0, 1, 75, 150);
      }
      else if (shade < .9985) {
        //prysm
        m1 = map(fxrand(), 0, 1, 150, 175);
        m2 = map(fxrand(), 0, 1, 75, 100);
      }
      else {
        m1 = map(fxrand(), 0, 1, 175, 200);
        m2 = map(fxrand(), 0, 1, 100, 150);

      }


      cc = fxrand();

      r1 = fxrand();
      r2 = fxrand();
      r3 = fxrand();
      if (cc < .30) {
        cr = 1
      } else if (cc < .60) {
        cr = 2
      } else if (cc < 1) {
        cr = 3
      }

      switch (cr) {
        case 1:
          cool[z] = color(r1 * m1, r2 * m1 + m2, r3 * m1 + m2, al);
          break;
        case 2:
          cool[z] = color(r1 * m1 + m2, r2 * m1, r3 * m1 + m2, al);
          break;
        case 3:
          cool[z] = color(r1 * m1 + m2, r2 * m1 + m2, r3 * m1, al);
          break;
      }
    }
  }
  for (var x = 0; x < maxwidth + spacingy / 2; x += spacingx) {
    items[x] = []
    if (colrs > .33) {
      for (z = 0; z < 10; z++) {
        if (shade < .25) {
          m1 = map(fxrand(), 0, 1, 50, 75);
          m2 = map(fxrand(), 0, 1, 100, 125);
          //darkish
        }
        else if (shade < .5) {
          //prysm
          m1 = map(fxrand(), 0, 1, 100, 125);
          m2 = map(fxrand(), 0, 1, 75, 150);
        }
        else if (shade < .9985) {
          //prysm
          m1 = map(fxrand(), 0, 1, 150, 175);
          m2 = map(fxrand(), 0, 1, 75, 100);
        }
        else {
          m1 = map(fxrand(), 0, 1, 175, 200);
          m2 = map(fxrand(), 0, 1, 100, 150);

        }


        cc = fxrand();

        r1 = fxrand();
        r2 = fxrand();
        r3 = fxrand();
        if (cc < .30) {
          cr = 1
        } else if (cc < .60) {
          cr = 2
        } else if (cc < 1) {
          cr = 3
        }
        switch (cr) {
          case 1:
            cool[z] = color(r1 * m1, r2 * m1 + m2, r3 * m1 + m2, al);
            break;
          case 2:
            cool[z] = color(r1 * m1 + m2, r2 * m1, r3 * m1 + m2, al);
            break;
          case 3:
            cool[z] = color(r1 * m1 + m2, r2 * m1 + m2, r3 * m1, al);
            break;
        }
      }
    }

    for (var y = 0; y < maxheight + spacingy / 2; y += spacingy) {
      //ellipse(x,y,10,10)

      if (colrs > .66) {
        for (z = 0; z < 10; z++) {
          if (shade < .25) {
            m1 = map(fxrand(), 0, 1, 50, 75);
            m2 = map(fxrand(), 0, 1, 100, 125);
            //darkish
          }
          else if (shade < .5) {
            //prysm
            m1 = map(fxrand(), 0, 1, 100, 125);
            m2 = map(fxrand(), 0, 1, 75, 150);
          }
          else if (shade < .9985) {
            //prysm
            m1 = map(fxrand(), 0, 1, 150, 175);
            m2 = map(fxrand(), 0, 1, 75, 100);
          }
          else {
            m1 = map(fxrand(), 0, 1, 175, 200);
            m2 = map(fxrand(), 0, 1, 100, 150);

          }


          cc = fxrand();

          r1 = fxrand();
          r2 = fxrand();
          r3 = fxrand();
          if (cc < .30) {
            cr = 1
          } else if (cc < .60) {
            cr = 2
          } else if (cc < 1) {
            cr = 3
          }
          switch (cr) {
            case 1:
              cool[z] = color(r1 * m1, r2 * m1 + m2, r3 * m1 + m2, al);
              break;
            case 2:
              cool[z] = color(r1 * m1 + m2, r2 * m1, r3 * m1 + m2, al);
              break;
            case 3:
              cool[z] = color(r1 * m1 + m2, r2 * m1 + m2, r3 * m1, al);
              break;
          }
        }
      }


      items[x][y] = new cirs(x, y, cool, divmod)
        strokeWeight(1)
        stroke(linec)
        if(inv){
          stroke(255)
        }
      if (linetype < .15) {
        line(x, 0, x, height)
        line(0, y, width, y)
        f2 = "yes"
      } else if (linetype < .3) {
        line(x, 0, x, height)
        line(0, y, width, y)
        f2 = "also yes"
      } else if (linetype < .45) {
        //crossleft
        line(x - width, 0, x, height)
        line(x, 0, x - width, height)
        line(0, y, width, y)
        f2 = "cross left"
      } else if (linetype < .6) {
        //crossright
        line(x + width, 0, x, height)
        line(x, 0, x + width, height)
        line(0, y, width, y)
        f2 = "crossright"
      } else if (linetype < .75) {
        //crisscross
        line(x - width, 0, x, height)
        line(x, 0, x - width, height)
        line(x + width, 0, x, height)
        line(x, 0, x + width, height)
        line(0, y, width, y)
        f2 = "crisscross"
      } else {
        //none
        f2 = "none"
      }
    }

  }

  window.$fxhashFeatures = {
    "Colors": f1, //options red, blue, teal
    "Amount": amount-1, //options small long normal
    "Inverse": inv,
    "Lines": f2,
    "How much butter do you need?": Math.floor(fxrand()*100),
    "Background": f4,
  }




  noLoop()
}

function draw() {
  for (var x = minwidth; x < maxwidth + spacingy / 2; x += spacingx) {
    for (var y = minheight; y < maxheight + spacingy / 2; y += spacingy) {
      items[x][y].show()

    }
  }

}

function cirs(xpos, ypos, cool, divmod) {
  this.modif = spacingx / 8
  console.log(divmod)
  if (divmod < 3) {
    this.modif = 0
  }
  this.x = xpos - this.modif
  this.y = ypos - this.modif
  this.maxw = itemwidth
  this.maxh = itemwidth
  this.coo = []
  this.curritemwidth = itemwidth
  this.curritemheight = itemheight
  this.strcol = 255

  this.state = 1
  this.dir = fxrand()
  for (i = 0; i < cool.length; i++) {
    this.coo[i] = cool[i];
  }
  this.show = function () {

    //stroke(this.col)
    strokeWeight(2)
    noStroke()

    fill(this.coo[0])
    if(inv){
      noFill()
      stroke(255)
    }
    //top
    quad(this.x, this.y, this.x - itemwidth / divmod, this.y - itemwidth / divmod, this.x + itemwidth / divmod, this.y - itemwidth / divmod, this.x + itemwidth / divmod2, this.y)


    fill(this.coo[5])
    if(inv){
      noFill()
      stroke(255)
    }
    //bot
    quad(this.x, this.y + itemwidth / divmod2, this.x - itemwidth / divmod, this.y - itemwidth / divmod + itemwidth / divmod2, this.x + itemwidth / divmod, this.y - itemwidth / divmod + itemwidth / divmod2, this.x + itemwidth / divmod2, this.y + itemwidth / divmod2)


    fill(this.coo[1])
    if(inv){
      noFill()
      stroke(255)
    }
    //front
    quad(this.x, this.y, this.x + itemwidth / divmod2, this.y, this.x + itemwidth / divmod2, this.y + itemwidth / divmod2, this.x, this.y + itemwidth / divmod2)


    fill(this.coo[2])
    if(inv){
      noFill()
      stroke(255)
    }
    //back
    quad(this.x - itemwidth / divmod, this.y - itemwidth / divmod, this.x + itemwidth / 2 - itemwidth / divmod, this.y - itemwidth / divmod, this.x + itemwidth / 2 - itemwidth / divmod, this.y + itemwidth / 2 - itemwidth / divmod, this.x - itemwidth / divmod, this.y + itemwidth / 2 - itemwidth / divmod)


    fill(this.coo[3])
    if(inv){
      noFill()
      stroke(255)
    }
    //r
    quad(this.x, this.y, this.x - itemwidth / divmod, this.y - itemwidth / divmod, this.x - itemwidth / divmod, this.y + itemwidth / divmod, this.x, this.y + itemwidth / divmod2)


    fill(this.coo[4])
    if(inv){
      noFill()
      stroke(255)
    }
    //l
    quad(this.x + itemwidth / divmod2, this.y, this.x + itemwidth / divmod, this.y - itemwidth / divmod, this.x + itemwidth / divmod, this.y + itemwidth / divmod, this.x + itemwidth / divmod2, this.y + itemwidth / divmod2)

  }


}
