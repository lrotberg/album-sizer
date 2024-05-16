interface Props {
  top: number;
  bottom: number;
  wholeNumber: number;
}

function Fraction({ top, bottom, wholeNumber }: Props) {
  return (
    <div>
      <div className="fraction">
        {wholeNumber > 0 && <span className="fraction-whole">{wholeNumber}</span>}
        <span className="fraction-top">{top}</span>
        <span className="fraction-bottom">{bottom}</span>
      </div>
    </div>
  );
}

export default Fraction;
