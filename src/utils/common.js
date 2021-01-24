import { Toast } from 'vant'
export async function pageLoaing(callback, options) {
  const ToastRef = Toast.loading({
    message: options && options.message || '加载中...',
    forbidClick: true,
    duration: 0
  })
  try {
    await callback()
  } catch (e) {
    // TODO handle the exception
    console.log(e)
  } finally {
    if (!options || (options && !options.always)) {
      ToastRef.clear()
    }
  }
}
