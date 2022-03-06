export const SvgIcon = (props) => (
  <svg aria-hidden="true" viewBox="0 0 28 28" {...props}>
    <title>{props?.title}</title>
    <path d={props?.d} {...props?.path}></path>
  </svg>
);
