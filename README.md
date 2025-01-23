# Expo Image Component - URI Error: Image Not Loaded

This repository demonstrates a common issue when using the Expo `Image` component: failure to load an image from a URI. The problem often arises from incorrect URIs, inaccessible servers, or other network problems.  This example shows how the error manifests and provides a solution to handle it gracefully.

## Bug

The `bug.js` file contains code that attempts to load an image from a potentially invalid URI. This leads to the image not being displayed.

## Solution

The `bugSolution.js` file presents a revised approach that includes error handling. It uses the `onError` prop of the `Image` component to manage the scenario where the image fails to load.  A placeholder image is shown in case of failure. 