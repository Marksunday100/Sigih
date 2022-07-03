import axios from "axios";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "../App.css";
import Copy from "../assets/copy.png";
import ReactLoading from "react-loading";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchAPI();
    }
    // eslint-disable-next-line
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return (
      <div className="loading">
        <ReactLoading type="spin" color="#13B46E" height={50} width={25} />
      </div>
    );
  }
  if (error) {
    return <p className="noData">Error :( Make sure it is url link</p>;
  }

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p className="linkBoard">{shortenLink}</p>
          <CopyToClipboard
            className="clipboard"
            text={shortenLink}
            onCopy={() => setCopied(true)}
          >
            <button className={copied ? "copied" : ""}>
              <img src={Copy} alt="copy button" className="copyImg" />
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
