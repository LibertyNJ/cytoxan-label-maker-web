'use-strict';

export function reduceClassName(baseClassName, className) {
  return className ? `${baseClassName} ${className}` : baseClassName;
}
