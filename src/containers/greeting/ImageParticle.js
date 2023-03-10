const _setup = () => {
  if (rendererRef.current) {
    rendererRef.current.destroy(true)
  }
  rendererRef.current = PIXI.autoDetectRenderer(
    window.innerWidth,
    window.innerHeight,
    {
      transparent: true,
      antialias: true,
    }
  )

  containerRef.current.appendChild(rendererRef.current.view)

  const texture = PIXI.Texture.from(targetImage)
  const baseSize = Math.min(window.innerWidth, window.innerHeight) - PADDING * 2
  const targetRatio = texture.width / texture.height
  const width = targetRatio > 1 ? baseSize : baseSize * targetRatio
  const height = targetRatio > 1 ? baseSize / targetRatio : baseSize
  const offsetX = (window.innerWidth - width) / 2
  const offsetY = (window.innerHeight - height) / 2

  const particles = []

  for (let x = 0; x < texture.width; x += PARTICLE_SIZE) {
    for (let y = 0; y < texture.height; y += PARTICLE_SIZE) {
      const pixelData = texture.data[y * texture.width + x]

      if (pixelData[3] > 0) {
        const color = [pixelData[0], pixelData[1], pixelData[2]]
        const position = new PIXI.Point(x + offsetX, y + offsetY)
        const scale = PARTICLE_SIZE / 2
        particles.push({ position, color, scale })
      }
    }
  }

  const mouse = new PIXI.Point(window.innerWidth / 2, window.innerHeight / 2)
  const repulsionChangeDistance = DEFAULT_REPULSION_CHANGE_DISTANCE

  const animate = () => {
    for (let i = 0; i < points.current.length; i++) {
      points.current[i].updateState()
    }

    rendererRef.current.render(containerRef.current)
    requestAnimationFrame(animate)
  }

  animate()

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
  })

  window.addEventListener("resize", () => {
    rendererRef.current.resize(window.innerWidth, window.innerHeight)
  })

  points.current = particles.map((particle) => {
    return new ImageParticle({
      originPosition: particle.position,
      originScale: particle.scale,
      originColor: particle.color,
      texture,
      repulsionChangeDistance,
    })
  })

  pointSprites.current = points.current.map((point) => {
    return point()
  })

  const particleContainer = new PIXI.particles.ParticleContainer()
  particleContainer.addChildren(pointSprites.current)

  containerRef.current.addChild(particleContainer)
}
export default _setup
