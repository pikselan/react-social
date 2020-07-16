import React from "react";
import { Link } from "react-router-dom";

export function User(props: any) {
  return (
    <Link
      to={`/${props.href}`}
      className={`text-dark ${props.className}`}
      style={props.style}
    >
      {props.isName ? `${props.children}` : `@${props.href}`}
    </Link>
  );
}

export function Tag(props: any) {
  return (
    <Link
      to={`/${props.href}`}
      className={`text-dark ${props.className}`}
      style={props.style}
    >
      #{props.href}
    </Link>
  );
}

export function Button(props: any) {
  const className = [props.className];
  className.push("btn");
  className.push("rounded-pill");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")}>
        {props.isLoading ? (
          <div
            className="spinner-border spinner-border-sm mx-5"
            role="status"
            style={props.style}
          >
            <span className="sr-only">Loading</span>
          </div>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          onClick={onClick}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
