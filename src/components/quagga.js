import React, { Component } from "react";
import Quagga from "quagga";
import { createWorker } from "tesseract.js";
import mydata from "data-url-canvas";

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "",
      barcode: "",
      text: "",
    };
  }

  componentWillReceiveProps(props) {
    if (
      props.img.current.current != undefined ||
      props.img.current.current != null
    ) {
      this.getCanv(props.img);
    }
  }

  getCanv = async (img) => {
    let barcode;
    // console.log(mydata.fromCanvas(img.current.current), "url");
    Quagga.decodeSingle(
      {
        decoder: {
          readers: ["code_128_reader", "ean_reader"], // List of active readers
        },

        locator: {
          halfSample: true,
        },
        locate: true, // try to locate the barcode in the image
        src: mydata.fromCanvas(img.current.current), // or 'data:image/jpg;base64,' + data
      },
      function (callme) {
        if (callme && callme.hasOwnProperty("codeResult")) {
          barcode = callme.codeResult.code;
          set();
        } else {
          barcode = "Couldn't find barcode. Image not clear enough.";
          set();
        }
      }
    );
    let set = () => {
      this.setState({
        imgUrl: mydata.fromCanvas(img.current.current),
        barcode: barcode,
      });
      // console.log(this.state, "callme");
    };

    this.doOCR(mydata.fromCanvas(img.current.current));
  };

  doOCR = async (img) => {
    // console.log("ready");
    this.setState({ text: "Please wait" });
    const worker = createWorker({
      logger: (m) => console.log(m),
    });
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(img);
    // console.log(text, "text");
    if (text != "") this.setState({ text: text });
    else
      this.setState({
        text: "Couldn't find any text. Image not clear enough.",
      });
    await worker.terminate();
  };
  render() {
    // console.log(this.state);
    return (
      <>
        <div className="container">
          <div className="card">
            {this.state.barcode && (
              <p>
                <span style={{ fontWeight: "800" }}>Barcode:</span>{" "}
                {this.state.barcode}
              </p>
            )}
          </div>
          <div className="card">
            {this.state.text && (
              <p>
                <span style={{ fontWeight: "800" }}>Text:</span>{" "}
                {this.state.text}
              </p>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Scanner;
