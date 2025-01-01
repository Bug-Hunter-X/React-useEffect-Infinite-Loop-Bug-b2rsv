```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use a callback or other mechanism to avoid direct state updates
    let mounted = true;
    const interval = setInterval(() => {
       if (mounted) setCount(prevCount => prevCount + 1);
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
      mounted = false; // Cleanup to prevent mem leaks
    };
  }, []);

  return <div>Count: {count}</div>;
}
```